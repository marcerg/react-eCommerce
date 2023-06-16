import Layout from "../../Components/Layout";
import { useContext } from 'react';
import {ShoppingCartContext} from "../../Context"
import OrderCard from '../../Components/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';



function MyOrder() {
  const context = useContext(ShoppingCartContext);

  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  
  if (index === 'last') index = context.order?.length - 1

    return (
        <Layout>
          <div className='text-white flex items-center justify-center relative w-80 m-4'>
            <Link to='/my-orders' className='absolute left-0'>
              <ChevronLeftIcon className="h-6 w-6 text-white cursor-pointer hover:text-green-700 transition-colors" />
            </Link>
            <h1>MyOrder</h1>
          </div>
          <div className='flex flex-col w-80'>
                {
                context.order?.[index]?.products.map(product=>(
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        imgageUrl={product.images[0]} 
                        price={product.price}
                    />
                ))
                }
            </div>
        </Layout>
    )
  }
  
  export default MyOrder