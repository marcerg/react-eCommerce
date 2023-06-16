import { useRoutes, BrowserRouter } from 'react-router-dom'
import {ShoppingCartContextProvider} from '../../Context/index'
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
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/clothes', element: <Home />},
    {path: '/unNuevoNombre', element: <Home />},
    {path: '/fornitures', element: <Home />},
    {path: '/shoes', element: <Home />},
    {path: '/others', element: <Home />},
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
