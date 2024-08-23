import { useParams } from "react-router-dom";
import all_Product from "../Component/assets/all_Product"
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay"
import Related from "../Component/Related/Related";

const Product = () => {
    const { productId } = useParams();
    const product = all_Product.find(e => e.id === Number(productId));

    return (
        <div id="product">
            <ProductDisplay product={product} />
            <Related product={product}/>
        </div>
    )
}

export default Product