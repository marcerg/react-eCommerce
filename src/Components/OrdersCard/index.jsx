import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = props => {
    const { totalPrice, totalProducts, imageUrl} = props;
 
    return (
        <div className="flex justify-between h-28 w-80 items-center mb-2 text-white border border-green-700 rounded-lg">
            <figure className='w-24 h-24 ml-2'>
                <img className='w-full h-full rounded-lg object-cover' src={imageUrl} />
            </figure>
            <p className='flex flex-col p-3 font-light'>
                <span>Date: <span className="font-bold">01.02.23</span></span>
                <span>Total Products: <span className="font-bold">{totalProducts}</span></span>
                <span>Total Price: <span className="font-bold">${totalPrice}</span></span>
            </p>
            <ChevronRightIcon className='text-white w-9 h-9 hover:text-green-700 mr-2'/>
        </div>
    )
}
 
export default OrdersCard;