import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const InfoCard = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-[#04c8a4] to-[#03b8d7]'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-[#3a4256]'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-[#04c8a4] to-[#03b8d7]'
        },
    ]

    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card =>
                    <div key={card.id} className={`card text-white p-6 md:card-side shadow-xl ${card.bgClass}`}>
                        <figure>
                            <img src={card.icon} alt="Movie" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{card.name}</h2>
                            <p>{card.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default InfoCard;