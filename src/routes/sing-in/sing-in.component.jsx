import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import { 
  auth,
  signInWithGooglePopup ,
   createUserDocumentFromAuth ,
   signInWithGoogleRedirect
 } from "../../util/firebase/firebase.util"
 import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";


const SignIn = () => {
  useEffect(() => {
    async () => {
      const response = await getRedirectResult(auth)
      if(response){
        const userDocRef = await createUserDocumentFromAuth(response.user)
      }
    }
  } , [])

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  };
  const logGoogleUserRedirect = async () => {
    const {user } = await signInWithGoogleRedirect()
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      {/* <button onClick={logGoogleUser}>Sign in with google popup</button> */}
      <button onClick={logGoogleUserRedirect}>Sign in with google redirect</button>
      <SignUpForm/>
    </div>
  )
}

export default SignIn