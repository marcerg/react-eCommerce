import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext()

export const initualizeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem('account')
  const signOutInLocalStorage = localStorage.getItem('sign-out')
  let parsedAccount
  let parsedSingOut

  if (!accountInLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage)
  }

  if (!signOutInLocalStorage) {
    localStorage.setItem('sign-out', JSON.stringify(false))
    parsedSingOut = false
  } else {
    parsedSingOut = JSON.parse(signOutInLocalStorage)
  }
} 

export const ShoppingCartContextProvider = ({children}) => {
    //My account
    const [account, setAccount] = useState({})
    
    //Sign Out
    const [signOut, setSignOut] = useState(false)

    //Shoping Cart 
    const [count, setCount] = useState(0);
    
    //Shopping Cart - Add products to Carts
    const [cartProducts, setCartProducts] = useState([]);
    
    //ProductDetail . Colse-Open
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen (true);
    const closeProductDetail = () => setIsProductDetailOpen (false);
    
    //ProductDetail . Show Product
    const [productToShow, setProductToShow] = useState({});

     //CheckOutSideMenu . Colse-Open
     const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);
     const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen (true);
     const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen (false);
    

    //Shopping Cart - Order
    const [order, setOrder] = useState([]);

    // Get products
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);

    
    //Get Products By Title
    const [searchByTitle, setSearchByTitle] = useState(null);

    
      // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])


  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])
    
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckOutSideMenuOpen,
            openCheckOutSideMenu,
            closeCheckOutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 