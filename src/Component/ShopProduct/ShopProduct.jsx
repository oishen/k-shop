import { useState } from 'react'
import all_Product from '../assets/all_Product'
import Item from '../Item/Item'
import './ShopProduct.css'

const ShopProduct = () => {

    const [selectCategory, setSelectCategory] = useState('all product')

    const handleChange = (e) => {
        setSelectCategory(e.target.value)
    }

    const filter = all_Product.filter((f)=>
        selectCategory === 'all product' ? true : f.category === selectCategory
    )    

    function showEmptyElement() {
        const empty = document.getElementById('empty');
        if (empty) {
            empty.style.display = 'block';
        }
    }

    function hideEmptyElement() {
        const empty = document.getElementById('empty');
        if (empty) {
            empty.style.display = 'none';
        }
    }

    if (filter.length === 0) {
        showEmptyElement();
    } else{
        hideEmptyElement();
    }




    return (
        <div id="shopproduct" className="mt-5 mb-5">
            <div className="d-flex justify-content-between mb-5">
                <h2 className="h2 text-center">{selectCategory.charAt(0).toUpperCase() + selectCategory.slice(1)} <span>({filter.length})</span></h2>
                <div className="d-flex align-items-center gap-3">
                    Sort by category:
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
            <div id='empty' className='text-center'>
                <img src="../src/component/assets/empty-package.png" alt="" />
                <h1>! Product empty</h1>
            </div>
        </div>
    )


    
}

export default ShopProduct