import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const handelLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        signIn(email, password)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    };
    return (
        <div >
            <Navbar></Navbar>
            <div className='p-10'>

                <form className=" p-10 shadow-2xl" onSubmit={handelLogin}>
                    <h1 className='text-center font-semibold text-3xl my-5'>Login your account</h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter your email address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary"  >Login</button>
                        <Link to={'/signup'} className='mt-5'>Don't Have An Account? <span className='text-red-600'>Register</span></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;