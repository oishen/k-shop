
import { useState } from "react"
import all_Product from "../Component/assets/all_Product"
import Item from "../Component/Item/Item"
import banner from '../Component/assets/slides1.jpg'


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
            <div className="container-fluid-lg" id="div-banner">
                <img src={banner} alt="shop banner" className='w-100' />
            </div>

            <div className="mt-5 mb-5 container-lg">
                <div className="d-flex justify-content-between mb-5">
                    <h2 className="h2 text-center">{selectCategory.charAt(0).toUpperCase() + selectCategory.slice(1)} <span>({filter.length})</span></h2>
                    <div className="d-flex align-items-center gap-3">
                        <p className="m-auto" style={{width: "240px"}}>Sort by category:</p>
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