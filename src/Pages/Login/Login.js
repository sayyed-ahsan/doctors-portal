import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState("");

    const handleLogin = (data) => {
        console.log(data)
        console.log(errors)
    }

    return (
        <section className='mx-5 '>
            <div className='h-[800px] text-3xl flex justify-center items-center bg-[#ecfeff]'>
                <div className='bg-white w-96 p-12 rop-shadow-lg border-2 border-sky-300'>
                    <h2 className='text-3xl text-center'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input  {...register("email", {
                                required: "Email Address is required"
                            })} type="email" className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600 text-sm'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input  {...register("password", {
                                required: "pasword is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })} type="password" className="input input-bordered w-full max-w-xs" />
                            <label className="label"><span className="label-text">forget password?</span></label>
                            {errors.password && <p className='text-red-600 text-sm'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn w-full' value={'Login'} type="submit" />

                    </form>
                    <p className='text-sm text-center my-2'>New to doctor Portal <Link className='text-sky-400' to='/signup'>Signup</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>Google</button>
                </div>
            </div>
        </section>
    );
};

export default Login;