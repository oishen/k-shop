import { useContext, useEffect, useState } from 'react';
import './ProductDisplay.css'
import { ShopContext } from '../ShopContext/ShopContext';

const ProductDisplay = (props) => {

    const {stocks, setStock} =useContext(ShopContext)
    console.log(stocks);
    
    const {product} = props     
    
    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    const {addToCart} = useContext(ShopContext)
    
    useEffect(() => {
        setSelectedImage(product.images[0]);
    }, [product]);
    
    const onPlus = () => {
        if(stocks > 0 && stocks < product.stock ){
            setStock(stocks+1)
        }
    }

    const onMinus = () => {
        if(stocks > 1) {
            setStock(stocks-1)
        }
    }
    
    return (
        <div id='productdisplay' className='mb-5'>
            <div className="container-lg">
                <div className="row justify-content-between">
                    <div className="col-md-6 col-sm-12 mb-5">
                        <div className="row">
                            <div className="col-sm-3 gap-1" id='divImg'>
                                <div id="imgSmall" >
                                    {product.images.map((img, i)=>{
                                        return(
                                            <img src={img} alt={`Product thumbnail ${i + 1}`} 
                                    onClick={() => setSelectedImage(img)} key={i}/>
                                        )
                                    })}
                                </div>
                                
                            </div>
                            <div className="col-9" id='imgBig'>
                                <img src={selectedImage} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <h2>{product.name}</h2>
                        <div className="d-flex gap-2 mb-3 mt-3 align-items-center">
                            <div className='gap-2 d-flex'>
                                <i className="fa-solid fa-star fa-bounce" style={{color: '#FFDC87'}}></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            (112)
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusantium nam odio dignissimos asperiores ut praesentium eveniet, eum deserunt a soluta maiores! Aliquid corporis magnam, fuga aut accusantium odit obcaecati!</p>
                        <div className="d-flex gap-3">
                            <p id="old-price">${product.old_price}</p>
                            <p id="new-price">${product.new_price}</p>
                        </div>
                        <p><span>Category: </span>{product.category}</p>
                        <h2 className="h2">Select Color</h2>
                        <div className='gap-1 d-flex'>
                            {product.color.map((color, i)=>{
                                return(
                                    <div key={i}>
                                        <input type="radio" name="color" className='d-none' id={color} />
                                        <label htmlFor={color}>{color}</label>
                                    </div>
                                )                                
                            })}
                        </div>
                        {/* <div className={`d-flex gap-1 align-items-center mt-4 ${product.stock===0?'d-none':'d-block'}`}>
                            <button className='btn btn-outline-secondary rounded-2 ps-3 pe-3 p-1' onClick={onMinus}>
                                <i className="fa-solid fa-minus"></i>
                            </button>
                            <button className='btn-outline-none btn'>{stocks}</button>
                            <button className='btn btn-outline-secondary rounded-2 ps-3 pe-3 p-1' onClick={onPlus} >
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        </div> */}
                        <span id='outofstock' className={`${product.stock===0?'d-block':'d-none'}`}>*Out of stock</span>
                        <a className={`btn btn-warning text-light mt-4 p-2 ps-3 pe-3 rounded-1 ${product.stock===0?'disabled':''
                        }`} onClick={()=>{addToCart(product.id)}}>ADD TO CART</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay