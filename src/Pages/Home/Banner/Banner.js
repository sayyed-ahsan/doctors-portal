import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import PrimaryButto from '../../../components/PrimaryButto';

const Banner = () => {
    return (

        <section className='bg-[#ecfeff] mb-20'>
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
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <PrimaryButto>Get Appoinment</PrimaryButto>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Banner;