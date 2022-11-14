import React, { useState } from 'react';
import AvailableDats from './AvailableDats';
import AppoinmetBanner from './AppoinmetBanner';


const Appoinment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
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