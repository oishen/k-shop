import { Link } from 'react-router-dom'
import './Item.css'

const Item = (props) => {
    return (
        <div id='item' className="d-flex justify-content-center">
            <div>
                <div className="border rounded-3 p-3" id="img">
                    <Link to={`/kim/product/${props.id}`} onClick={window.scroll(0,0)}>
                        <img src={props.image} alt={props.name} />
                    </Link>
                </div>
                <h6 className="mt-2">{props.name}</h6>
                <div className="d-flex gap-3">
                    <p id='new-price'>${props.new_price}</p>
                    <p id='old-price'>${props.old_price}</p>
                </div>
            </div>
        </div>
    )
}

export default Item