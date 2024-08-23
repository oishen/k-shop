import all_Product from "../Component/assets/all_Product"
import Item from "../Component/Item/Item"

const ProductPage = (props) => {

    const filter = all_Product.filter((f)=>{
        return f.category === props.category
    })

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
        <div id="productpage">
            <div className="container-fluid-lg">
                <img src={props.banner} alt="banner" className='w-100' />
            </div>

            <div className="mt-5 mb-5 container-lg">
                <h2 className="h2">{props.category.charAt(0).toUpperCase() + props.category.slice(1)} <span>({filter.length})</span></h2>
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
                    <img src="../src/component/assets/empty-package.png" alt="" style={{width: '40%'}} />
                    <h1 className="text-secondary">! Product empty</h1>
                </div>
            </div>
        </div>
    )
}

export default ProductPage