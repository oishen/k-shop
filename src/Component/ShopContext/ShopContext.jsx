import { createContext, useState } from "react"
import "./ShopContext.css"
import all_Product from "../assets/all_Product"

export const ShopContext = createContext(null)

const getDefaultCart = () => {

    let cart = {}
    for (let index = 0; index < all_Product.length+1; index++){
        cart[index] = 0;
    }
    return cart
}


const ShopContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        // console.log(cartItems);
        
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (let item in cartItems) {
            if(cartItems[item]>0){
                let itemInfo = all_Product.find((product)=> product.id===Number(item))
                totalAmount += itemInfo.new_price*cartItems[item]
            }
        }
        return totalAmount
    }

    const getTotalCartItem = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }

    const [searchQuery, setSearchQuery] = useState('')
    const onSearch = (query) =>{
        setSearchQuery(query.target.value)
        query.preventDefault()
    }
    const [stocks, setStock] =useState(1)


    const contextValue = {getTotalCartItem, getTotalCartAmount, all_Product, cartItems, addToCart, removeFromCart, onSearch, searchQuery, stocks, setStock}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )


}

export default ShopContextProvider