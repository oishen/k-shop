import { useContext } from "react"
import { ShopContext } from "../Component/ShopContext/ShopContext"
import all_Product from "../Component/assets/all_Product"
import Item from "../Component/Item/Item"
import './Css/Search.css'

const Search = () => {
    const {searchQuery} =useContext(ShopContext)

    const filter = (all_Product).filter((product)=>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.category.toLowerCase().includes(searchQuery.toLowerCase())
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
        <div id="search">
            <div className="container-lg mt-5 mb-5">
                <h2 className="h2 mb-5">results for <span className="h2">"{searchQuery}"</span></h2>
                <div className="row row-gap-5">
                    {filter.map((product, i)=>{
                        return (
                            <div className='col-sm-3 col-4' key={i}>
                                <Item id={product.id} name={product.name} image={product.images[0]} old_price={product.old_price} new_price={product.new_price} />
                            </div>
                        )
                    })}
                </div>

                <div id='empty' className='text-center '>
                    <img src="../src/Component/assets/empty-package.png" alt="" className="w-50" />
                    <h1>! Product empty</h1>
                </div>
            </div>
        </div>
    )
}

export default Search