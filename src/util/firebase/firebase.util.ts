import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver ,
  User
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  query,
  collection,
  writeBatch,
  getDoc,
  QueryDocumentSnapshot
} from "firebase/firestore";
import { Category } from "../../store/categories/category.types";

const firebaseConfig = {
  apiKey: "AIzaSyBEq2fJEhWGDa3yBMr_wRjwaXmP4Q8_teI",
  authDomain: "ecommerce-crown-db-81e99.firebaseapp.com",
  projectId: "ecommerce-crown-db-81e99",
  storageBucket: "ecommerce-crown-db-81e99.appspot.com",
  messagingSenderId: "1097194563748",
  appId: "1:1097194563748:web:8c08f454c4b6d76e6d5e31",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
export const db = getFirestore();

export type ObjectToAdd = {
  title : string ,
}
export const addCollectionAndDocuments = async <T extends ObjectToAdd> (
  collectionKey : string,
  objectsToAdd : T[]
) : Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () : Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc ;
  }, {} as Category []);

  return categoryMap;
};

export type AdditionalInformation ={
  displayName?: string ,
}

export type UserData = {
  createdAt : Date ,
  displayName : string ,
  email : string
}

export const createUserDocumentFromAuth = async (userAuth : User , AdditionalInformation = {} as AdditionalInformation) : Promise<void  | QueryDocumentSnapshot<UserData> >=> {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error ) {
      console.log("error creating the user ", error);
    }
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>;
};
export const createAuthUserWithEmailAndPassword = async (email : string , password : string) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const SignAuthUserWithEmailAndPassword = async (email : string, password : string) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const SignOutUser = async () => {
  return await signOut(auth);
};
export const onAuthStateChangesListener = (Callback : NextOrObserver<User> ) =>
  onAuthStateChanged(auth, Callback);

export const getCurrentUser = () : Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
