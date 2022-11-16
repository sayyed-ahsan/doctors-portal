import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import bg from '../../assets/images/bg.png'
import PrimaryButto from '../../components/PrimaryButto';

const AppoinmetBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div>
            <section className='bg-[#ecfeff] mb-10'>
                <div

                    style={{
                        background: `url(${bg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "850px, 500px"
                    }}

                    className={`hero  bg-[#ecfeff] mb-30`}>
                    <div className='py-16'>
                        <div className="hero-content  flex-col lg:flex-row-reverse">
                            <img src={chair} className="rounded-lg max-w-[50%] shadow-2xl" alt='' />
                            <div className='w-[50%]'>
                                <DayPicker
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AppoinmetBanner;