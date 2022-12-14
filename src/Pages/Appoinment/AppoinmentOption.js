import React from 'react';
import PrimaryButto from '../../components/PrimaryButto';

const AppoinmentOption = ({ option, setTretment }) => {
    const { name, slots, price } = option
    return (
        <div className=''>
            <div className="card w-96 bg-[#ffff] drop-shadow-md hover:drop-shadow-2xl">
                <div className="card-body">
                    <h2 className=" font-bold text-2xl text-[#04c7a7] text-center">{name}</h2>
                    <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                    <p className='text-center'> {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <p className='text-center text-[#04c7a7]'><small>Price: ${price}</small></p>
                    <div className="card-actions justify-center">
                        <label onClick={() => setTretment(option)} htmlFor="booking-modal" className="btn">Book Appoinment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentOption;