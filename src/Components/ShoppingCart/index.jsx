import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const ShoppingCart =() => {
    const context = useContext(ShoppingCartContext)

    const openChekoutSideMenu = () => {
        context.openChekout()
        context.closeProductDetail()
    }

    return (
        <div className="relative flex gap-0.5 items-center" 
            onClick={()=> openChekoutSideMenu()}>
            <ShoppingBagIcon className="h-6 w-6 text-white hover:text-green-700" /> 
            <div className="absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-green-700 w-4 h-4 text-xs">{context.cartProducts.length}</div>
        </div>
    )
}

export default ShoppingCart;