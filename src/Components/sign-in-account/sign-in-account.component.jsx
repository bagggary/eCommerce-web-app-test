import React, { useState } from 'react'
import {  auth , createUserDocumentFromAuth, signInWithGooglePopup , SignAuthUserWithEmailAndPassword} from '../../util/firebase/firebase.util'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'


const defaultFormFields = {
  email: '',
  password: '',
}

const SignInAccount = () => {

  const SignInWithGoogle =async () =>  {
    const {user} =  await signInWithGooglePopup();
     await createUserDocumentFromAuth(user)
  }

  const [formFields , setFormFields] = useState(defaultFormFields)
  const {email , password } = formFields

  const resetInputFields = ()=>{
    setFormFields(defaultFormFields)
  }

  const handleSumbit = async (event) => {
    event.preventDefault()
    try{
      const response = await SignAuthUserWithEmailAndPassword(email , password)
console.log(response)
      resetInputFields();
    } catch(error){
      console.log(error.message)
    }
  }
  const onChangeHandler = (event) => {
    const {name , value} = event.target
    setFormFields({...formFields , [name] : value})
  }
  return (
    <div className='flex flex-col w-96'>
      <h2 className=' my-[10px] font-bold'>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSumbit}>
            <FormInput label ='Email' type='email' required name='email' onChange={onChangeHandler} value={email}/>
            <FormInput label = 'Password' type='password' required  name = 'password' onChange={onChangeHandler} value={password}/>
           <div className='flex justify-between'>
            <Button buttonType='inverted' type = 'submit'> sing in </Button>
            <Button buttonType='google' type ='button' onClick = {SignInWithGoogle}> Google Sign in </Button>
           </div>
      </form>
    </div>
  )
}


export default SignInAccount
