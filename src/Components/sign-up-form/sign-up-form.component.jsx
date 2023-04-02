import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword  , auth , createUserDocumentFromAuth} from '../../util/firebase/firebase.util'

const defaultFormFields = {
  displayName: '' ,
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields , setFormFields] = useState(defaultFormFields)
  const {displayName , email , password , confirmPassword} = formFields

  const resetInputFields = ()=>{
    setFormFields(defaultFormFields)
  }

  const handleSumbit = async (event) => {
    event.preventDefault()
    if(password !== confirmPassword) {
      alert ('password does not match')
      return ;
    }
    try{
      const response = await createAuthUserWithEmailAndPassword(email , password)
      await createUserDocumentFromAuth(auth , {displayName})
      resetInputFields();
      
    } catch(error){
      console.log('user creation encountered error' , error)
    }
  }
  const onChangeHandler = (event) => {
    const {name , value} = event.target
    setFormFields({...formFields , [name] : value})
  }
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSumbit}>
            <label>Display name</label>
            <input type = 'text' required  name='displayName' onChange={onChangeHandler} value={displayName}/>
            <label>Email</label>
            <input type='email' required name='email' onChange={onChangeHandler} value={email}/>
            <label>Password</label>
            <input type='password' required  name = 'password' onChange={onChangeHandler} value={password}/>
            <label>Confirm Password</label>
            <input type='password' required name='confirmPassword'  onChange={onChangeHandler} value={confirmPassword}/>

            <button type="submit">Sign Up</button>

      </form>
    </div>
  )
}


export default SignUpForm
