import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail";
import {ShoppingCartContext} from "../../Context"


function Home() {
  
  const context = useContext(ShoppingCartContext);
  
  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
          <div class="flex items-top justify-center w-screen h-screen mt-16">
            <h1 class=" text-white text-4xl text-center">We don't have anything :(</h1>
          </div>
      )
    }
  }


  return (
        <Layout >
          <div className='text-white flex items-center justify-center relative w-80 m-4'>
            <h1 className="font-medium text-xl">Exclusive Products</h1>
          </div>
          <input 
            type="text" 
            placeholder="Search a products" 
            className="rounded-lg border border-green-700 w-80 p-4 mb-4 focus: outline-none" 
            onChange={(event) => context.setSearchByTitle(event.target.value)}/>
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg bg-zinc-950">
          { renderView() }
          </div>
          <ProductDetail></ProductDetail>
        </Layout>
    )
  }
  
  export default Home
  