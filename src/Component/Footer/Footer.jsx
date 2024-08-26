import './Footer.css'
import img from "../../Component/assets/logo.png"

const Footer = () => {
    return (
        <div id="footer" className='pt-5'>
            <div className="container-lg">
                <div className="d-flex justify-content-center">
                    <img src={img} alt="" />
                </div>
                <div className="d-flex gap-4 justify-content-center">
                    <p>Company</p>
                    <p>Product</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className="d-flex gap-3 justify-content-center">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                </div>
                <hr />
                <p className="text-center">Copyright @ 2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer