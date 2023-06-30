import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useContext } from "react";
import {ShoppingCartContext} from "../../Context"
import { NavLink } from "react-router-dom";
import './Navbar.css';
import  ShoppingCart  from '../ShoppingCart';

function Navbar() {
    const context = useContext(ShoppingCartContext);
    
    //Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    //Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    //Has account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true 
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true 
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    const renderView = () => {
        if (hasUserAnAccount && !isUserSignOut) {
            return (
                <>
                <li className='hover:text-green-600'>
                    {parsedAccount?.email}
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
                    <NavLink to='/my-account'
                      className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }>
                        My Account
                    </NavLink>
                </li>
                <li className='hover:text-green-700'>
                    <NavLink to='/sign-in'
                      className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    onClick={()=> handleSignOut()}>
                        Sign out
                    </NavLink>
                </li>
                </>
            )
        } else {
            return (
                <li className='hover:text-green-700'>
                <NavLink to='/sign-in'
                  className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                onClick={()=> handleSignOut()}>
                    Sign out
                </NavLink>
            </li>
            )
        }
    }
    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-neutral-700">
            <ul className="flex items-center gap-3 text-white">
                <li className="font-semibold text-lg hover:text-green-700">
                    <NavLink to={`${isUserSignOut ?'/sign-in' : '/'}`}>
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
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }>
                        Electronics
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3 text-white">
                {renderView()}
                <li className='flex item-center'>
                    <ShoppingCart/>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;