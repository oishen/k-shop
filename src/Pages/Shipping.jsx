import './Css/Shipping.css'
import province from '../Component/assets/provinces'
import all_Product from '../Component/assets/all_Product'
import { useContext } from 'react'
import { ShopContext } from '../Component/ShopContext/ShopContext'
import { Link } from 'react-router-dom'
import CartTotal from '../Component/CartTotal/CartTotal'

const Shipping = () => {


    return (
        <div id="shipping">
            <div className="container-lg">
                <h5 className="h5 text-center mt-5">Checkout</h5>
                <div className="d-flex m-auto mt-5 mb-5 justify-content-center" id='proceed-bar'>
                    <div>
                        <div id="circle" className="d-flex justify-content-center align-items-center border border-3 border-danger rounded-pill m-auto"></div>
                        <p>Shipping</p>
                    </div>
                    <p id="line1" style={{marginTop: '10px'}}></p>
                    <div>
                        <div id="circle" className='d-flex justify-content-center align-items-center rounded-pill text-decoration-none m-auto bg-secondary-subtle'></div>
                        <p className='text-black-50'>Payment</p>
                    </div>
                    <p id="line1" style={{marginTop: '10px'}}></p>
                    <div>
                        <div id="circle" className='d-flex justify-content-center align-items-center text-light rounded-pill text-decoration-none m-auto bg-secondary-subtle'></div>
                        <p className='text-black-50'>Order</p>
                    </div>
                </div>
                <form className="row justify-content-between d-flex flex-lg-row flex-column-reverse">
                    <div className="col-lg-7 col-md-12 bg-light p-5 rounded-3">
                        <h6 className="h6">CONTACT DETAILS</h6>
                        <div className="d-flex gap-3 mt-4">
                            <div className='w-50'>
                                <label>First Name</label>
                                <input type="text" name="fname" className='form-control'/>
                            </div>
                            <div className='w-50'>
                                <label>Last Name</label>
                                <input type="text" name="lname" className='form-control'/>
                            </div>
                        </div><br />
                        <label>Email</label>
                        <input type="email" name="email" className='form-control' /><br />
                        <label>Phone</label>
                        <input type="number" name="phone" className='form-control' /><br />
                        <div className="d-flex gap-3">
                            <div className="w-50">
                                <div className="d-flex">
                                    <label>Address 1</label>
                                    <button type='button' data-bs-toggle="tooltip" data-bs-placement="top" title="The primary street address, including house or apartment number, street name, and any necessary directional information (e.g., NW, SE)." id='popover'>!</button>
                                </div>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="w-50">
                                <div className="d-flex">
                                    <label>Address 2</label>
                                    <button type='button' data-bs-toggle="tooltip" data-bs-placement="top" title="Additional address information, such as apartment, suite, unit, floor, or building number. This line is optional but can be critical for deliveries to multi-unit buildings." id='popover'>!</button>
                                </div>
                                <input type="text" className='form-control' />
                            </div>
                        </div><br />
                        <div className="d-flex gap-3">
                            <div className='w-50'>
                                <label>Zip code</label>
                                <input type="text" name="lname" className='form-control'/>
                            </div>
                            <div className='w-50'>
                                <label>Province</label>
                                <select className='form-select'>
                                    {province.map((c, i)=> {
                                        return(
                                            <option key={i} value={c.name}>{c.name}</option>

                                        )
                                    })}
                                </select>
                            </div>
                            
                        </div><br />
                        <div className="d-flex gap-3 mt-3">
                            <Link to='/k-shop/cart' className='btn btn-secondary rounded-3 w-50' >Cancel</Link>
                            <button className='btn btn-danger rounded-3 w-50' >Continue</button>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12 ps-4 pt-5 rounded-3">
                        <CartTotal/>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default Shipping