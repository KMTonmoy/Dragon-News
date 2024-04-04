import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { AuthContext } from '../../../Providers/AuthProvider';

const Signup = () => {

    const { createUser } = useContext(AuthContext);


    const handelSignUp = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        const name = form.get("name")
        const photo = form.get("photo")
        console.log(email, password, name, photo)

        createUser(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    };
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div className="">

                    <form className=" p-10 shadow-2xl" onSubmit={handelSignUp}>
                        <h1 className='text-center font-semibold text-3xl my-5'>Register your account</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter your Photo URL" className="input input-bordered" required />
                        </div>

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

                        <button className="font-bold mt-2">Accept Term & Conditions</button>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;