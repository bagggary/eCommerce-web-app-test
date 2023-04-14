import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import { useDispatch } from 'react-redux'
// import { userContext } from '../../contexts/user.context'
import { googleSignInStart , emailSignInStart} from '../../store/user/user.action'


const defaultFormFields = {
  email: '',
  password: '',
}

const SignInAccount = () => {
  const dispatch = useDispatch()

  const SignInWithGoogle = async () =>  {
    dispatch(googleSignInStart())
  }

  const [formFields , setFormFields] = useState(defaultFormFields)
  const {email , password } = formFields

  // const {setCurrentUser} = useContext(userContext)

  

  const resetInputFields = ()=>{
    setFormFields(defaultFormFields)
  }

  const handleSumbit = async (event) => {
    event.preventDefault()
    try{
    dispatch(emailSignInStart(email , password))
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
