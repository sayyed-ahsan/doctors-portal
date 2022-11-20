import React from 'react';
import bg from '../../../assets/images/appointment.png'
import PrimaryButto from '../../../components/PrimaryButto';

const ContuctUs = () => {
    return (
        <section>
            <div
                style={{
                    background: `url(${bg})`,
                    backgroundSize: 'cover'
                }}
                className="mt-32"
            >
                <p className='text-white text-center text-2xl font-bold text-teal-300 pb-3 pt-20'>Contact Us</p>
                <p className='text-white text-center text-3xl text-teal-300'>Stay connected with Us</p>
                <div className=' flex justify-center py-10'>
                    <div className="form-control  pb-10">
                        <input type="text" placeholder="Email" className=" my-3 input input-bordered input-success w-full max-w-xs" />
                        <input type="text" placeholder="subject" className=" my-5 input input-bordered input-success w-full max-w-xs" />
                        <textarea className="textarea textarea-success mb-5" placeholder="your massage"></textarea>
                        <PrimaryButto >Submit</PrimaryButto>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContuctUs;