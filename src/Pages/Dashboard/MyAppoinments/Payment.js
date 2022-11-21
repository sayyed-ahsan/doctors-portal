
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from '../../Shared/CheckOut/Checkout';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
console.log(stripePromise)

const Payment = () => {
    const booking = useLoaderData();
    return (
        <div className='bg-[#ecfeff] p-8 min-h-screen'>
            <h1 className='text-2xl'>payment{booking.treatment}</h1>
            <h1>  Price: {booking.price}</h1>

            <div className='bg-base-100 w-96 p-5 rounded-lg'>
                <Elements stripe={stripePromise}>
                    <Checkout
                        booking={booking}
                    ></Checkout>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;