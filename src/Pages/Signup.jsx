import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <div id="signup" className="container-fluid d-flex justify-content-center align-items-center pt-5 pb-5 mt-5">
            <form action="" className="rounded-1 p-sm-5" style={{boxShadow: '0 0 5px silver'}} >
                <h2 className="h2">Signup</h2><br />
                <input type="text" name="name" placeholder="your name" className="form-control" /><br />
                <input type="text" name="email" placeholder="your email" className="form-control" /><br />
                <input type="password" name="password" placeholder="password" className="form-control" /><br />
                <button className="btn btn-danger ps-4 pe-4 p-2 w-100 mb-2" value="submit">Continue</button>
                <p>Already have an account? <Link to='/k-shop/login' className="text-decoration-none text-danger">Login here</Link></p>
                <div className="d-flex align-items-center gap-1">
                    <input type="checkbox" />
                    <p className="mb-auto">By continue, i agree to the terms of use & privacy policy.</p>
                </div>
            </form>
        </div>
    )
}

export default Signup