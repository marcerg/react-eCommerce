import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";

function SignIn() {
    const context = useContext(ShoppingCartContext)
    const [view, setView] = useState('user-info')

    //Acoount
    const accoutn = localStorage.getItem('account')
    const parsedAccount = JSON.parse(accoutn)
    //Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.accoutn ? Object.keys(context.accoutn).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const renderLogIn = () => {
      return(
        <div className="text-white flex flex-col w-80">
        <p>
          <span className="font-ligth text-sm">Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p>
          <span className="font-ligth text-sm">Password: </span>
          <span>{parsedAccount?.password}</span>
        </p>
        <Link
          to='/'>
            <button
            className="bg-green-700 disabled:bg-black/40 w-full rounded-lg py-3 mt-4 mb-2"
            disabled={!hasUserAnAccount}
            >
              Log in
            </button>
        </Link>
        <div className="text-center">
          <a className="font-light text-xs underline underline-offset-4" href="/">Forgot my password</a>
        </div>
        <button
        className="border border-green-700 disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
        onClick={()=> setView('create-user-info')}
        disabled={hasUserAnAccount}>
          Sign up
        </button>
        </div>
      )
    }
    const renderCreateUserInfo = () => {

    }

    const renderView = () => view === 'create-user-info' ? renderCreateUserInfo(): renderLogIn()

    return (
      <Layout>
        <h1 className="font-medium text-xl text-center mb-6 w-80 text-white">Welcome</h1>
        {renderView()}
      </Layout>
    )
}
  
  export default SignIn