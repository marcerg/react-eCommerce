import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {ShoppingCartContext} from "../../Context"
import { XMarkIcon } from '@heroicons/react/24/solid';
import './style.css';
import OrderCard from '../OrderCard';
import {totalPrice} from '../../Utils'


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) =>{
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCkeckout = () => {
        const orderToAdd = {
            date: '01.04.21',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
    }
   
    return (
        <aside 
            className={`${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col right-0 fixed border border-green-700 rounded-lg bg-black/90`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl text-white'>My Order</h2>
                <div onClick={() => context.closeCheckOutSideMenu()}>
                    <XMarkIcon className="h-6 w-6 text-white cursor-pointer hover:text-red-500 transition-colors" />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                context.cartProducts.map(product=>(
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        imgageUrl={product.images[0]} 
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='px-2 flex justify-between items-center rounded-lg border border-green-600'>
                    <span className='font-light text-white'>Total:</span>
                    <span className='font-medium text-xl text-white'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button
                        className='bg-green-600 py-3 w-full text-white rounded-md mt-2'
                        onClick={() => handleCkeckout()}
                    >CheckOut</button>
                </Link>
            </div>
        </aside> 
    )
}

export default CheckoutSideMenu;