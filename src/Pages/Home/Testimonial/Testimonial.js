import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]
    return (
        <section >
            <div className='my-20 flex justify-between'>
                <div>
                    <div>
                        <h3 className='text-1xl text-secondary font-bold'>Testimonial</h3>
                        <h1 className='text-3xl text-yellow-300 font-semibold'>What Our Patients Says</h1>
                    </div>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =>
                        <div className="card shadow-xl  bg-[#ecfeff] ">
                            <div className="card-body">
                                <p>{review.review}</p>
                                <div className="flex items-center mt-6">
                                    <div className="avatar mr-6">
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={review.img} alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="text-lg">{review.name}</h5>
                                        <p>{review.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Testimonial;