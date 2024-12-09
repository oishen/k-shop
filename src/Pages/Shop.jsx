
import { useState } from "react"
import all_Product from "../Component/assets/all_Product"
import Item from "../Component/Item/Item"
import slide1_img from '../Component/assets/samsung-galaxy-watch-2.png'
import slide2_img from '../Component/assets/google-pixel-2.png'
import slide3_img from '../Component/assets/hp-probook-1.png'
import slide4_img from '../Component/assets/iphone15-pro-3.png'
import "./Css/Shop.css"

const Shop = () => {

    const [selectCategory, setSelectCategory] = useState('all product')

    const handleChange = (e) => {
        setSelectCategory(e.target.value)
    }

    const filter = all_Product.filter((f)=>
        selectCategory === 'all product' ? true : f.category === selectCategory
    )    

    return (
        <div id="shop">
            <div className="mb-5 container-lg container-fluid">
                <div className="row align-items-center mb-5 d-flex flex-column-reverse flex-lg-row">
                    <div className="col-lg-7 col-12">
                        <h3 className="h3 w-75 mb-5">DISCOVERED YOUR FAVORITE PRODUCTS</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat voluptate facilis, omnis dolores adipisci cumque accusamus minima doloribus possimus quas cupiditate a doloremque, ipsum aspernatur. Velit beatae tenetur voluptatibus fuga?</p>
                        <button className="btn btn-danger">SHOP NOW</button>
                    </div>
                    {/* <!-- Carousel --> */}
                    <div id="demo" className="carousel slide col-lg-5 col-12" data-bs-ride="carousel">

                        {/* <!-- Indicators/dots --> */}
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active bg-dark"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1" className="bg-dark"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2" className="bg-dark"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="3" className="bg-dark"></button>
                        </div>
                        

                        {/* <!-- The slideshow/carousel --> */}
                        <div className="carousel-inner">
                            
                            <div className="carousel-item active">
                                <img src={slide1_img} alt="Samsung Galaxy Watch 5" className="d-block w-100" />
                            </div>
                            
                            <div className="carousel-item">
                                <img src={slide2_img} alt="Google Pixelbook 13.3" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src={slide3_img} alt="HP Probook" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src={slide4_img} alt="Apple Iphone 15 Pro Max" className="d-block w-100" />
                            </div>
                        </div>
                        {/* <!-- Left and right controls/icons --> */}
                        <div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <i className="fa-solid fa-chevron-left" style={{color: 'black'}}></i>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <i className="fa-solid fa-chevron-right" style={{color: 'black'}}></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between mb-5">
                    <h2 className="h2 text-center">{selectCategory.charAt(0).toUpperCase() + selectCategory.slice(1)} <span>({filter.length})</span></h2>
                    <div className="d-flex align-items-center gap-3">
                        <p className="m-auto col-6">Sort by category:</p>
                        <select className='form-select' onChange={handleChange}>
                            <option value="all product">All</option> 
                            <option value="earphone">Earphone</option>
                            <option value="tablet">Tablet</option>
                            <option value="laptop">Laptop</option>
                            <option value="phone">Phone</option>
                            <option value="watch">Watch</option>
                        </select>
                    </div>
                </div>
                <div className="row row-gap-5">
                    {filter.map((product, i)=>{
                        return (
                            <div className='col-sm-3 col-4' key={i}>
                                <Item id={product.id} name={product.name} image={product.images[0]} old_price={product.old_price} new_price={product.new_price} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Shop