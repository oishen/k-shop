import { Link } from "react-router-dom"
import './Css/Login.css'

const Login = () => {
    return (
        <div id="login" className="container-fluid d-flex justify-content-center align-items-center pt-5 pb-5 mt-5">
            <form action="" className="rounded-1 p-sm-5">
                <h2 className="h2">Login</h2><br />
                <input type="text" name="email" placeholder="your email" className="form-control" /><br />
                <input type="password" name="password" placeholder="password" className="form-control" /><br />
                <button className="btn btn-danger ps-4 pe-4 p-2 w-100 mb-2" value="submit">Login</button>
                <p>Not yet have an account? <Link to='/k-shop/signup' className="text-decoration-none text-danger">Register here</Link></p>
                
            </form>
        </div>
    )
}

export default Login