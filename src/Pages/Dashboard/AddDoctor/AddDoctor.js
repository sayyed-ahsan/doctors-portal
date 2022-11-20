import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const imgHostKey = process.env.REACT_APP_imagebb_key;
    // console.log(imgHostKey);

    const { data: s, isLoading } = useQuery({
        queryKey: ['specility'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appoinmentSpecility`);
            const data = await res.json();
            return data;
        }
    })

    console.log(isLoading)

    //-----------------------------
    //-----------------------------
    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }

                    // save doctor information to the database
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            // toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/managedoctors')
                        })
                }
            })
    }
    //-----------------------------
    //-----------------------------


    if (isLoading) {
        <div>loding...</div>
    }

    return (
        <section className='mx-5 '>
            <div className='min-h-screen text-3xl p-8 flex justify-center items-center bg-[#ecfeff]'>
                <div className='bg-white w-96 p-12 rop-shadow-lg border-2 border-sky-300'>
                    <h2 className='text-3xl text-center'>Add a Doctor</h2>
                    <form onSubmit={handleSubmit(handleAddDoctor)}>
                        {/*---------- name -----------*/}
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input  {...register("name", {
                                required: "Name is Required"
                            })} type="name" className="input input-bordered input-success w-full max-w-xs" />
                            {errors.name && <p className='text-red-600 text-sm'>{errors.name?.message}</p>}
                        </div>
                        {/*---------- email -----------*/}
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input  {...register("email", {
                                required: "Email Address is required"
                            })} type="email" className="input input-bordered input-success w-full max-w-xs" />
                            {errors.email && <p className='text-red-600 text-sm'>{errors.email?.message}</p>}
                        </div>
                        {/*---------- specility -----------*/}
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Speciality</span></label>
                            <select {...register('specialty')} className="select select-success w-full max-w-xs">
                                <option disabled selected>Pic a Speciality</option>
                                {
                                    s?.map(specility => <option
                                        key={specility?._id}
                                    >{specility?.name}</option>)
                                }

                            </select>
                        </div>
                        {/*---------- photo -----------*/}
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Photo</span></label>
                            <input  {...register("image", {
                                required: "Photo is Required"
                            })} type="file" className="input input-bordered input-success w-full max-w-xs" />
                            {errors.name && <p className='text-red-600 text-sm'>{errors.image?.message}</p>}
                        </div>
                        <input className='btn w-full mt-5' value={'Add Doctor'} type="submit" />

                    </form>

                </div>
            </div>
        </section>
    );
};

export default AddDoctor;









        // const doctor = {
                    //     name: data.name,
                    //     email: data.email,
                    //     specialty: data.specialty,
                    //     image: imgData.data.url
                    // }

                    // save doctor information to the database
                    // fetch('http://localhost:5000/doctors', {
                    //     method: 'POST',
                    //     headers: {
                    //         'content-type': 'application/json',
                    //         authorization: `bearer ${localStorage.getItem('accessToken')}`
                    //     },
                    //     body: JSON.stringify(doctor)
                    // })
                    // .then(res => res.json())
                    // .then(result =>{
                    //     console.log(result);
                    //     toast.success(`${data.name} is added successfully`);
                    //     navigate('/dashboard/managedoctors')
                    // })