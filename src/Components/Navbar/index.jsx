import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useContext } from "react";
import {ShoppingCartContext} from "../../Context"
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const context = useContext(ShoppingCartContext);
    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-neutral-700">
            <ul className="flex items-center gap-3 text-white">
                <li className="font-semibold text-lg hover:text-green-700">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li className='hover:text-green-700'>
                    <NavLink 
                        to='/'
                        onClick={()=>context.setSearchByCategory()}
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        All
                    </NavLink>
                </li>
                <li className='hover:text-green-700'>
                    <NavLink to='/clothes'
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li className='hover:text-green-700'>
                    <NavLink to='/fornitures'
                    onClick={() => context.setSearchByCategory('furniture')}                        
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }>
                        Fornitures
                    </NavLink>
                </li>
                <li className='hover:text-green-700'>
                    <NavLink to='/shoes'
                        onClick={() => context.setSearchByCategory('shoes')}
                        className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }>
                        Shoes
                    </NavLink>
                </li>
                <li className='hover:text-green-700'>
                    <NavLink to='/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }>
                        Others
                    </NavLink>
                </li>
                <li className='hover:text-green-700'>
                    <NavLink to='/unNuevoNombre'
                        onClick={() => context.setSearchByCategory('un nuevo nombre')}
                        className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }>
                        Un nuevo nombre
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3 text-white">
                <li className='hover:text-green-600'>
                    marcelo@mail.com
                </li>
                <li className='hover:text-green-700'>
                    <NavLink to='/my-orders'
                      className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li className='hover:text-green-700'>
                    <NavLink to='/sign-in'
                      className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex item-center'>
                    <ShoppingBagIcon className="h-6 w-6 text-white hover:text-green-700" /> 
                    <div>{context.cartProducts.length}</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;