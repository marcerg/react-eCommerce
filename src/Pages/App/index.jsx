import { useContext } from 'react'
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import {ShoppingCartContextProvider, initualizeLocalStorage, ShoppingCartContext} from '../../Context/index'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar  from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'

const AppRouters = () => {
  const context = useContext(ShoppingCartContext)

  //Acoount
  const accoutn = localStorage.getItem('account')
  const parsedAccount = JSON.parse(accoutn)

  //Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  
  //Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.accoutn ? Object.keys(context.accoutn).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut
  

  let routes = useRoutes([
    {path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate remplace to={'/sign-in'}/>},
    {path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate remplace to={'/sign-in'}/>},
    {path: '/unNuevoNombre', element:hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate remplace to={'/sign-in'}/>},
    {path: '/fornitures', element:hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate remplace to={'/sign-in'}/>},
    {path: '/shoes', element:hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate remplace to={'/sign-in'}/>},
    {path: '/others', element:hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate remplace to={'/sign-in'}/>},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/*', element: <NotFound />},
    {path: '/sign-in', element: <SignIn />}
  ])
  return routes
}

function App() {
  initualizeLocalStorage()
  
  return (
    <ShoppingCartContextProvider>
      <BrowserRouter>
        <AppRouters />
        <Navbar></Navbar>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartContextProvider>
  )
}

export default App
