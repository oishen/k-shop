import { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../ShopContext/ShopContext'
import img from "../../Component/assets/logo.png"

const Navbar = () => {
    const [menu, setMenu] = useState('shop')

    const {getTotalCartItem, onSearch} = useContext(ShopContext)
    
    return (
        <div id='navbar' className='pb-5 mb-3'>
            <nav className="navbar navbar-expand-lg p-0 fixed-top bg-white" style={{height: '50px'}}>
                <div className="container-lg">
                    <a className="navbar-brand">
                        <img src={img} alt="logo" />
                    </a>

                    <div className="d-lg-block d-none">
                        <ul className="navbar-nav gap-4">
                            <li className="nav-item">
                                <Link to='/k-shop/' className={`nav-link ${menu === 'shop' ? 'active' : ''}`} onClick={()=>setMenu('shop')} >All Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/k-shop/earphone' className={`nav-link ${menu === 'earphone' ? 'active' : ''}`} onClick={()=>setMenu('earphone')} >Earphone</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/k-shop/tablet' className={`nav-link ${menu === 'tablet' ? 'active' : ''}`} onClick={()=>setMenu('tablet')} >Tablet</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/k-shop/laptop' className={`nav-link ${menu === 'laptop' ? 'active' : ''}`} onClick={()=>setMenu('laptop')} >Laptop</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/k-shop/phone' className={`nav-link ${menu === 'phone' ? 'active' : ''}`} onClick={()=>setMenu('phone')} >Phone</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/k-shop/watch' className={`nav-link ${menu == 'watch' ? 'active' : ''}`} onClick={()=>setMenu('watch')} >Watch</Link>
                            </li>
                        </ul>
                    </div>

                    <ul className="navbar-nav align-items-center gap-3 flex-row">
                        <li className={`nav-item `}>
                            <i className="fa-solid fa-magnifying-glass" data-bs-toggle='modal' data-bs-target='#searchModal'></i>
                        </li>
                        <li className={`nav-item ${menu == 'cart' ? 'active' : ''}`} onClick={()=>setMenu('cart')}>
                            <Link to='/k-shop/cart' className='nav-link' >
                                <i className="fa-solid fa-cart-plus" ></i>
                                <span className="badge bg-danger rounded-circle">{getTotalCartItem()}</span>
                            </Link>
                        </li>
                        <li className={`nav-item ${menu == 'login' ? 'active' : ''}`} onClick={()=>setMenu('login')}>
                            <Link to='/k-shop/login' className="nav-link btn bg-dark text-white ps-3 pe-3">Login</Link>
                        </li>
                        <button type='button' data-bs-toggle='modal' data-bs-target='#navResponsive' className='navbar-toggler' >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                    </ul>

                </div>
            </nav>

            {/* search modal */}
            <div className="modal fade" id="searchModal">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">

                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                             <form action="" className='container-lg d-flex align-items-center gap-2' onChange={onSearch}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder='Search products ...' />
                                <Link to='/k-shop/k-shop/search'>
                                    <input type="submit" className='d-none' data-bs-dismiss="modal"   />
                                </Link>
                             </form>
                        </div>

                    </div>
                </div>
            </div>

            {/* responsive modal */}
            <div className="modal fade" id="navResponsive">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">

                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                             <ul className="navbar-nav gap-4">
                                <li className="nav-item" data-bs-dismiss="modal">
                                    <Link to='/k-shop/' className={`nav-link ${menu == 'shop' ? 'active' : ''}`} onClick={()=>setMenu('shop')}  >All Products</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal">
                                    <Link to='/k-shop/earphone' className={`nav-link ${menu == 'earphone' ? 'active' : ''}`} onClick={()=>setMenu('earphone')} >Earphone</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal">
                                    <Link to='/k-shop/tablet' className={`nav-link ${menu == 'tablet' ? 'active' : ''}`} onClick={()=>setMenu('tablet')} >Tablet</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal">
                                    <Link to='/k-shop/laptop' className={`nav-link ${menu == 'laptop' ? 'active' : ''}`} onClick={()=>setMenu('laptop')} >Laptop</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal">
                                    <Link to='/k-shop/phone' className={`nav-link ${menu == 'phone' ? 'active' : ''}`} onClick={()=>setMenu('phone')} >Phone</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal">
                                    <Link to='/k-shop/watch' className={`nav-link ${menu == 'watch' ? 'active' : ''}`} onClick={()=>setMenu('watch')} >Watch</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar