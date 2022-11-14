import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div>
            <div className="hero my-12  bg-[#ecfeff] ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-60% m-12'><img src={treatment} className="lg:w-100% rounded-lg shadow-2xl" /></div>
                    <div className='w-40%'>
                        <h1 className="text-5xl font-bold">Exceptional Dental <br></br> Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn border-0 bg-gradient-to-r from-cyan-500 to-blue-500">Get Appoinment</button>                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;