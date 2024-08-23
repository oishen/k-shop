import { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { ShopContext } from '../ShopContext/ShopContext'

const Navbar = () => {
    const [menu, setMenu] = useState('shop')

    const location = useLocation();

    const {getTotalCartItem, onSearch} = useContext(ShopContext)
    
    useEffect(() => {
        // Set the active menu based on the current path
        const path = location.pathname;
        if (path.includes('watch')) {
            setMenu('watch');
        } else if (path.includes('earphone')) {
            setMenu('earphone');
        } else if (path.includes('tablet')) {
            setMenu('tablet');
        } else if (path.includes('laptop')) {
            setMenu('laptop');
        } else if (path.includes('phone')) {
            setMenu('phone');
        } else if (path.includes('cart')) {
            setMenu('cart');
        } else if (path.includes('login')) {
            setMenu('login');
        } else if (path.includes('sign')) {
            setMenu('signup');
        } else {
            setMenu('shop');
        }
    }, [location.pathname]);
    
    return (
        <div id='navbar'>
            <nav className="navbar navbar-expand-lg p-1">
                <div className="container-lg">
                    <a className="navbar-brand">
                        <img src="../src/Component/assets/logo.png" alt="" />
                    </a>

                    <div className="d-lg-block d-none">
                        <ul className="navbar-nav gap-4">
                            <li className="nav-item">
                                <Link to='/' className={`nav-link ${menu === 'shop' ? 'active' : ''}`} onClick={()=>setMenu('shop')} >All Products</Link>
                                {menu === 'shop'}
                            </li>
                            <li className="nav-item">
                                <Link to='/kim/earphone' className={`nav-link ${menu === 'earphone' ? 'active' : ''}`} onClick={()=>setMenu('earphone')} >Earphone</Link>
                                {menu === 'earphone'}
                            </li>
                            <li className="nav-item">
                                <Link to='/kim/tablet' className={`nav-link ${menu === 'tablet' ? 'active' : ''}`} onClick={()=>setMenu('tablet')} >Tablet</Link>
                                {menu === 'tablet'}
                            </li>
                            <li className="nav-item">
                                <Link to='/kim/laptop' className={`nav-link ${menu === 'laptop' ? 'active' : ''}`} onClick={()=>setMenu('laptop')} >Laptop</Link>
                                {menu === 'laptop'}
                            </li>
                            <li className="nav-item">
                                <Link to='/kim/phone' className={`nav-link ${menu === 'phone' ? 'active' : ''}`} onClick={()=>setMenu('phone')} >Phone</Link>
                                {menu === 'phone'}
                            </li>
                            <li className="nav-item">
                                <Link to='/kim/watch' className={`nav-link ${menu == 'watch' ? 'active' : ''}`} onClick={()=>setMenu('watch')} >Watch</Link>
                                {menu === 'watch'}
                            </li>
                        </ul>
                    </div>

                    <ul className="navbar-nav align-items-center gap-3 flex-row">
                        <li className={`nav-item `}>
                            <i className="fa-solid fa-magnifying-glass nav-link" data-bs-toggle='modal' data-bs-target='#searchModal'></i>
                        </li>
                        <li className={`nav-item ${menu == 'cart' ? 'active' : ''}`} onClick={()=>setMenu('cart')}>
                            <Link to='/kim/cart' className='nav-link' >
                                <i className="fa-solid fa-cart-plus" ></i>
                                <span className="badge bg-danger rounded-circle">{getTotalCartItem()}</span>
                            </Link>
                        </li>
                        <li className={`nav-item ${menu == 'login' ? 'active' : ''}`} onClick={()=>setMenu('login')}>
                            <Link to='/kim/login' className="nav-link btn bg-dark text-white ps-3 pe-3">Login</Link>
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
                                <i className="fa-solid fa-magnifying-glass nav-link"></i>
                                <input type="text" placeholder='Search products ...' />
                                <Link to='/kim/search'>
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
                                    <Link to='/' className={`nav-link ${menu == 'shop' ? 'active' : ''}`} onClick={()=>setMenu('shop')}  >All Products</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal">
                                    <Link to='/kim/earphone' className={`nav-link ${menu == 'earphoe' ? 'active' : ''}`} onClick={()=>setMenu('earphone')} >Earphone</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal">
                                    <Link to='/kim/tablet' className={`nav-link ${menu == 'tablet' ? 'active' : ''}`} onClick={()=>setMenu('tablet')} >Tablet</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal">
                                    <Link to='/kim/laptop' className={`nav-link ${menu == 'laptop' ? 'active' : ''}`} onClick={()=>setMenu('laptop')} >Laptop</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal">
                                    <Link to='/kim/phone' className={`nav-link ${menu == 'phone' ? 'active' : ''}`} onClick={()=>setMenu('phone')} >Phone</Link>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal">
                                    <Link to='/kim/watch' className={`nav-link ${menu == 'watch' ? 'active' : ''}`} onClick={()=>setMenu('watch')} >Watch</Link>
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