import React, { useState  } from 'react'
import { createAuthUserWithEmailAndPassword  , auth , createUserDocumentFromAuth} from '../../util/firebase/firebase.util'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'


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
      const{user} = await createAuthUserWithEmailAndPassword(email , password)
      await createUserDocumentFromAuth(user , {displayName})
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
    <div className='flex flex-col w-96'>
      <h2 className=' my-[10px] font-bold'>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSumbit}>
            <FormInput label = 'Display Name' type = 'text' required  name='displayName' onChange={onChangeHandler} value={displayName}/>
            <FormInput label ='Email' type='email' required name='email' onChange={onChangeHandler} value={email}/>
            <FormInput label = 'Password' type='password' required  name = 'password' onChange={onChangeHandler} value={password}/>
            <FormInput label = "Confirm Password" type='password' required name='confirmPassword'  onChange={onChangeHandler} value={confirmPassword}/>
            
<Button buttonType='inverted' type = 'submit'>
  sing up
</Button>

      </form>
    </div>
  )
}


export default SignUpForm
