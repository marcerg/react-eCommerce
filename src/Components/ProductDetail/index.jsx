import { useContext } from 'react';
import {ShoppingCartContext} from "../../Context"
import { XMarkIcon } from '@heroicons/react/24/solid';
import './style.css';


const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
   
    return (
        <aside 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col right-0 fixed border border-green-700 rounded-lg bg-black/90`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl text-white'>Detail</h2>
                <div onClick={() => context.closeProductDetail()}>
                    <XMarkIcon className="h-6 w-6 text-white cursor-pointer hover:text-red-500 transition-colors" />
                </div>
            </div>
                <figure className='px-6'>
                    <img 
                        className='w-full h-full rounder-lg' 
                        src={context.productToShow.images ? context.productToShow.images[0]: ''}
                        alt={context.productToShow.title} />
                </figure>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl text-white mb-2'>${context.productToShow.price}</span>
                    <span className='font-medium text-md text-white mb-1'>{context.productToShow.title}</span>
                    <span className='font-light text-sm text-white'>{context.productToShow.description}</span>
                </p>
        </aside>
    )
}

export default ProductDetail;