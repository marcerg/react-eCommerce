import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = props => {
    const {id, title, imgageUrl, price, handleDelete} = props;
    let renderXMarkIcon
    if (handleDelete){
        renderXMarkIcon = <XMarkIcon 
        onClick={()=>handleDelete(id)}
        className="h-6 w-6 text-white cursor-pointer hover:text-red-500 transition-colors" />
    }
    return (
        <div className="flex justify-between items-center mb-2  ">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imgageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light text-white'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium text-white'>${price}</p>
                {renderXMarkIcon}
            </div>
        </div>
    )
}
 
export default OrderCard;