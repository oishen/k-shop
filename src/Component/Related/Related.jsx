import { useEffect, useState } from "react"
import all_Product from "../assets/all_Product"
import Item from "../Item/Item"
import './Related.css'

const Related = (props) => {
    const {product} = props

    const [cat, setCategory] = useState([])

    useEffect(()=>{

        const filter = all_Product.filter((f)=> f.category === product.category)
        setCategory(filter)
        
    }, [product.category])
    
    return (
        <div id='related' className="mb-5 pt-5">
            <div className="container">
                <h2 className="h2 text-center">Related Products</h2>
                <div id="line" className="mb-5"></div>
                <div className="d-flex gap-5" id="divRelated">
                    {cat.map((product,i)=>{
                        return(
                            
                            <Item key={i} id={product.id} name={product.name} image={product.images[0]} old_price={product.old_price} new_price={product.new_price} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Related