import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentOption from './AppoinmentOption';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query'

const AvailableDats = ({ selectedDate }) => {

    // const [appoinmentOption, setAppoinmentOption] = useState([]);
    const [treatment, setTretment] = useState(null);

    const { data: appoinmentOption = [] } = useQuery({
        queryKey: ['appoinmentOption'],
        queryFn: async () => {
            const result = await fetch('https://doctors-portal-server-six-phi.vercel.app/appoinmentOptions')
            const data = await result.json();
            return data
        }
    })

    // useEffect(() => {
    //     fetch('https://doctors-portal-server-six-phi.vercel.app/appoinmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppoinmentOption(data))
    // }, [])



    return (
        <div className='bg-[#ecfeff  pb-20'>
            <p className='text-center text-4xl text-[#04c7a7] font-bold pb-2 pt-20'>Available Appoinment </p>
            <p className='text-center text-4xl text-black font-bold pb-16'>On: {format(selectedDate, 'PP')} </p>
            <div className='flex justify-center'>
                <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>
                    {
                        appoinmentOption.map(option =>
                            <AppoinmentOption
                                key={option._id}
                                option={option}
                                setTretment={setTretment}
                            ></AppoinmentOption>)
                    }
                </div>
            </div>
            {treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTretment={setTretment}
                ></BookingModal>}
        </div>
    );
};

export default AvailableDats;