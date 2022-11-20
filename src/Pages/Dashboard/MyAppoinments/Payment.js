
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
        <div>
            payment{booking.appointmentDate}
            <div className='bg-sky-100 w-96 p-5 '>
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