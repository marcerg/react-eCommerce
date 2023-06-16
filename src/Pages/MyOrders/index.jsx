import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from "../../Components/Layout";
import {ShoppingCartContext} from "../../Context"
import OrdersCard from '../../Components/OrdersCard'


function MyOrders() {
  const context = useContext(ShoppingCartContext);
    return (
        <Layout>
          <div className='text-white flex items-center justify-center relative w-80 m-4'>
            <h1>My Orders</h1>
          </div>
          {
            context.order.map((order, index)=>(
              <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard 
                totalPrice={order.totalPrice} totalProducts={order.totalProducts} imageUrl={order.products[0].images[0]} />
              </Link>
            )) 
          }
        </Layout>
    )
  }
  
  export default MyOrders