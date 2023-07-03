import { useContext, useState, useRef} from "react";
import { Link, Navigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";


function SignIn() {
    const context = useContext(ShoppingCartContext)
    const [view, setView] = useState('user-info')
    const form = useRef(null)

    //Acoount
    const accoutn = localStorage.getItem('account')
    const parsedAccount = JSON.parse(accoutn)
    //Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.accoutn ? Object.keys(context.accoutn).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignIn = () => {
      const stringifiedSignOut = JSON.stringify(false)
      localStorage.setItem('sign-out', stringifiedSignOut)
      context.setSignOut(false)
      //Redirect
      return <Navigate remplace to={'/'}/>
    }

    const editAccount = () => {
      const formData = new FormData(form.current)
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
      }
  
    //Create Account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)
    //Sign IN
    handleSignIn()
    }
    
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
            onClick={()=>handleSignIn()}
            disabled={!hasUserAnAccount}
            >
              Log in
            </button>
        </Link>
        <div className="text-center">
          <a className="font-light text-xs underline underline-offset-4" href="/">Forgot my password</a>
        </div>
        <button
        className="text-white border rounded-lg mt-6 py-3"
        onClick={()=> setView('create-user-info')}
        disabled={hasUserAnAccount}>
          Sign up
        </button>
        </div>
      )
    }
    const renderCreateUserInfo = () => {
      return (
        <form ref={form} className='flex flex-col gap-4 w-80'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name" className='font-light text-sm'>Your name:</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={parsedAccount?.name}
              placeholder="Peter"
              className='rounded-lg border border-black placeholder:font-light
              placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="email" className='font-light text-sm'>Your email:</label>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={parsedAccount?.email}
              placeholder="hi@helloworld.com"
              className='rounded-lg border border-black
              placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="password" className='font-light text-sm'>Your password:</label>
            <input
              type="text"
              id="password"
              name="password"
              defaultValue={parsedAccount?.password}
              placeholder="******"
              className='rounded-lg border border-black
              placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            />
          </div>
          <Link to="/">
            <button
              className='bg-black text-white w-full rounded-lg py-3'
              onClick={() => createAnAccount()}>
              Create
            </button>
          </Link>
        </form>
      )
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