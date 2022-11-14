import React from 'react';
import Lottie from "lottie-react";
import PrimaryButto from '../../../components/PrimaryButto';
import person from '../../../assets/lotti/person.json';


const Techonology = () => {
    return (
        <div>
            <div className="hero  bg-[#ecfeff] my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-[100%]'>
                        <h1 className='text-5xl font-bold text-black'>My latest teqnologies</h1>
                        <p className=" py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButto>make appoinment</PrimaryButto>
                    </div>
                    <Lottie className='bg-blac w-[60%]' animationData={person} loop={true} ></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Techonology;