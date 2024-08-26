import { useContext } from 'react'
import './CartDisplay.css'
import { ShopContext } from '../ShopContext/ShopContext'
import { Link } from 'react-router-dom'

const CartDisplay = () => {
    const {getTotalCartAmount, all_Product, cartItems, removeFromCart} = useContext(ShopContext)


    return (
        <div id='cartdisplay' className='pt-5 mb-5'>
            <div className="container-lg">
                <div id="table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>

                        {all_Product.map((e)=>{
                            if(cartItems[e.id]>0){
                                return (
                                    <tbody>
                                        <tr>
                                            <td><img src={e.images[0]} alt={e.name} /></td>
                                            <td>{e.name}</td>
                                            <td>${e.new_price.toFixed(2)}</td>
                                            <td><p className='border w-25 p-1 rounded-1 d-flex justify-content-center align-items-center'>{cartItems[e.id]}</p></td>
                                            <td>${(e.new_price*cartItems[e.id]).toFixed(2)}</td>
                                            <td>
                                                <a className="btn btn-danger" onClick={()=>{removeFromCart(e.id)}}><i class="fa-solid fa-trash" style={{color: '#fff'}}></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            }
                        })}
                    </table>
                </div>

                <div className="row mt-5 pb-5 pt-5 justify-content-between flex-md-row flex-column-reverse" id='cart-total'>
                    <div className="col-md-6 col-sm-12">
                        <h2 className="h2 pb-4">Cart Total</h2>
                        <div className="d-flex justify-content-between mt-3">
                            <p>Subtotal</p>
                            ${getTotalCartAmount().toFixed(2)}
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between mb-3">
                            <h6 className='h6'>Total</h6>
                            <h6>${getTotalCartAmount().toFixed(2)}</h6>
                        </div>
                        <Link to='/k-shop/shipping' className='btn btn-danger ps-5 pe-5 p-2 rounded-0 text-light' id='button'>PROCEED TO CHECKOUT</Link>
                    </div>

                    <div className="col-md-5 col-sm-12 mb-5">
                        <p>If you have a promote code, Enter it here</p>
                        <div className="d-flex justify-content-between" id='divButton'>
                            <input type="text" placeholder='promote code' />
                            <button className='btn btn-dark rounded-0'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDisplay