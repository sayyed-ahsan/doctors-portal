import React, { useState } from 'react';
import AvailableDats from './AvailableDats';
import AppoinmetBanner from './AppoinmetBanner';


const Appoinment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className='mx-5'>
            <AppoinmetBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppoinmetBanner>
            <AvailableDats
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AvailableDats>
        </div>
    );
};

export default Appoinment;