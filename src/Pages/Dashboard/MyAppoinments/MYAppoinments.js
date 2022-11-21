import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MYAppoinments = () => {

    const { user } = useContext(AuthContext);
    const url = `https://doctors-portal-server-six-phi.vercel.app/bookingss?email=${user?.email}`;


    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authuraization: `bearer ${localStorage.getItem('accesstoken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log(bookings);

    return (
        <div className='bg-[#ecfeff] p-8 min-h-screen'>
            <h1 className='text-2xl my-4'>My Appoinments</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings?.length && bookings?.map((booking, i) =>
                                <tr className="hover">
                                    <th>{i + 1}</th>
                                    <td>{booking?.patient}</td>
                                    <td>{booking?.treatment}</td>
                                    <td>{booking?.appointmentDate}</td>
                                    <td>{booking?.slot}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid && <Link
                                                to={`/dashboard/payment/${booking._id}`}
                                            >
                                                <button
                                                    className='btn btn-primary btn-sm'
                                                >Pay</button>
                                            </Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                        }
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MYAppoinments;