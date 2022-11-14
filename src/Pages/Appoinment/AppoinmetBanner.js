import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppoinmetBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div>
            <div>
                <div className="hero py-20 bg-base-200">
                    <div className="hero-content flex-col lg:justify-center lg:flex-row-reverse">
                        <div><img src={chair} className="lg:w-[100%] rounded-lg shadow-2xl" /></div>
                        <div className='w-[100%]'>
                            <DayPicker
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmetBanner;