import { useState } from 'react';
import { useContext } from "react";
import {ShoppingCartContext} from "../../Context"
import { PlusIcon, CheckCircleIcon } from '@heroicons/react/24/solid';


const Card = (data) => {
    const [iconoClickeado, setIconoClickeado] = useState(false);

    const context = useContext(ShoppingCartContext);
    
    const showProduct = (ProductDetail) => {
        context.openProductDetail();
        context.setProductToShow(data.data);
    }

    const addProdductsToCarts = (event, productData) =>{
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckOutSideMenu()
        console.log(context.cartProducts)
    }

    return (
        <div 
            className="bg-zinc-800 cursor-pointer w-56 h-60 rounded-lg p-10 hover:bg-green-700"
            onClick={()=>showProduct()}
        >
            <figure className="relative mb-2 w-full">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 ">{data.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title} />
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1  hover:bg-green-700"
                    onClick={(event) =>{
                        addProdductsToCarts(event, data.data);
                        setIconoClickeado(true);
                    }}
                >
                {iconoClickeado? (
                    <CheckCircleIcon className="h-7 w-7 text-green-700 hover:text-white"/>
                ) : (
                    <PlusIcon className="h-7 w-7 text-black hover:text-white" />
                )}
                </div>
            </figure>
            <p className="flex justify-between items-center">
                <span className="text-sm text-white font-light">{data.data.title}</span>
                <span className="text-lg text-white font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card