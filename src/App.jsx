import React , { useEffect } from 'react'
import Home from '../src/routes/home/home.components'
import { useDispatch } from 'react-redux'
import { Route , Routes } from 'react-router-dom'
import Navigation from './routes/navigation/Navigation.components'
import './index.css'
import SignIn from './routes/sing-in/sing-in.component'
import Shop from './Components/shop/shop.component'
import Checkout from './Components/checkout/checkout.component'
import { checkUserSession } from './store/user/user.action'
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(checkUserSession())
  } , [])
  return (
    <Routes>
      <Route path='/' element ={<Navigation/>}>
      <Route index element = {<Home />}/>
      <Route path='shop/*' element = {<Shop/>}/>
      <Route path='signIn' element = {<SignIn/>}/>
      <Route path='checkout' element = {<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App
