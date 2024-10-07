
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Shop from "./Pages/Shop"
import Navbar from "./Component/Navbar/Navbar"
import Product from './Pages/Product'
import Footer from "./Component/Footer/Footer"
import Cart from "./Pages/Cart"
import headphone_banner from './Component/assets/headphone_banner.jpg'
import tablet_banner from './Component/assets/tablet_banner.jpg'
import laptop_banner from './Component/assets/laptop_banner.jpg'
import phone_banner from './Component/assets/phone_banner.jpg'
import watch_banner from './Component/assets/watch_banner.jpg'
import ProductPage from "./Pages/ProductPage"
import Login from "./Pages/Login"
import Signup from './Pages/Signup'
import Shipping from "./Pages/Shipping"
import Payment from "./Pages/Payment"
import Order from "./Pages/Order"
import Search from "./Pages/Search"

const App = () => {
    return (
        <BrowserRouter basename="/">
            <Navbar/>
            <Routes>
                <Route path="/k-shop/" element={<Shop />} />
                <Route path="/k-shop/earphone" element={<ProductPage banner={headphone_banner} category="earphone" />} />
                <Route path="/k-shop/tablet" element={<ProductPage banner={tablet_banner} category="tablet" />} />
                <Route path="/k-shop/laptop" element={<ProductPage banner={laptop_banner} category="laptop" />} />
                <Route path="/k-shop/phone" element={<ProductPage banner={phone_banner} category="phone" />} />
                <Route path="/k-shop/watch" element={<ProductPage banner={watch_banner} category="watch" />} />
                <Route path="/k-shop/product" element={<Product/>} >
                    <Route path=":productId" element={<Product/>} />
                </Route>
                <Route path='/k-shop/cart' element={<Cart/>} />
                <Route path="/k-shop/login" element={<Login/>} />
                <Route path="/k-shop/signup" element={<Signup/>} />
                <Route path="/k-shop/shipping" element={<Shipping/>} />
                <Route path="/k-shop/payment" element={<Payment/>} />
                <Route path="/k-shop/order" element={<Order/>} />
                <Route path="/k-shop/search" element={<Search/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App