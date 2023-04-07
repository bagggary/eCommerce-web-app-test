

 import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";
 import SignInAccount from "../../Components/sign-in-account/sign-in-account.component";


const SignIn = () => {

  return (
    <div className="flex w-[900px] justify-between my-[30px] mx-auto">
      {/* <button onClick={logGoogleUser}>Sign in with google popup</button> */}
      <SignInAccount/>
      <SignUpForm/>
    </div>
  )
}

export default SignIn