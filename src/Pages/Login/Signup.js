import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {

    const { createUser } = useContext(AuthContext)

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                // updateUser(userInfo)
                //     .then(() => { })
                //     .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                // setSignUPError(error.message)
            });
    }

    return (
        <section className='mx-5 '>
            <div className='h-[800px] text-3xl flex justify-center items-center bg-[#ecfeff]'>
                <div className='bg-white w-96 p-12 rop-shadow-lg border-2 border-sky-300'>
                    <h2 className='text-3xl text-center'>Signup</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input  {...register("name", {
                                required: "Name is Required"
                            })} type="name" className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-600 text-sm'>{errors.name?.message}</p>}
                        </div>
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
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                pattern: { value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]/, message: 'please enter a strong password' }
                            })} type="password" className="input input-bordered w-full max-w-xs" />
                            <label className="label"><span className="label-text">forget password?</span></label>
                            {errors.password && <p className='text-red-600 text-sm'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn w-full' value={'Login'} type="submit" />

                    </form>
                    <p className='text-sm text-center my-2'>Already have an account <Link className='text-sky-400' to='/login'>Login</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>Google</button>
                </div>
            </div>
        </section>
    );
};

export default Signup;