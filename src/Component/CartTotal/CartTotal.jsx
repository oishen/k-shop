import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import all_Product from '../assets/all_Product'
import { Link } from 'react-router-dom'

const CartTotal = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext)

    return (
        <div id='carttotal'>
            <h6 className="h6">YOUR ORDERS</h6>
                <div className="mt-4">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>

                        {all_Product.map((e)=>{
                            if(cartItems[e.id]>0){
                                return (
                                    <tbody>
                                        <tr>
                                            <td>{e.name}</td>
                                            <td><p className='border w-50 p-1 rounded-1 d-flex justify-content-center align-items-center'>{cartItems[e.id]}</p></td>
                                            <td>${e.new_price.toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                )
                            }
                        })}
                    </table>
                    <div className="d-flex justify-content-between mt-4">
                        <p>Subtotal</p>
                        ${getTotalCartAmount().toFixed(2)}
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <h6 className='h6'>Total</h6>
                        <h6>${getTotalCartAmount().toFixed(2)}</h6>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to='/k-shop' className='btn btn-danger rounded-5 ps-5 pe-5 mt-4 text-center'>ADD MORE PRODUCTS</Link>
                    </div>
                </div><br />
        </div>
    )
}

export default CartTotal