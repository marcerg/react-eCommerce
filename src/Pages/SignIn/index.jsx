import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";

function SignIn() {
    return (
      <Layout>
        <h1 className="font-medium text-xl text-center mb-6 w-80 text-white">Welcome</h1>
        <div className="text-white flex flex-col w-80">
          <p>
            <span className="font-ligth text-sm">Email: </span>
            <span>marcelo@mail.com</span>
          </p>
          <p>
            <span className="font-ligth text-sm">Password: </span>
            <span>******</span>
          </p>
          <Link
            to='/'>
              <button
              className="bg-green-700 disabled:bg-black/40 w-full rounded-lg py-3 mt-4 mb-2"
              >
                Log in
              </button>
          </Link>
          <div className="text-center">
            <a className="font-light text-xs underline underline-offset-4" href="/">Forgot my password</a>
          </div>
          <button
          className="border border-green-700 disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3">
            Sign up
          </button>
        </div>
      </Layout>
    )
}
  
  export default SignIn