import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Events = () => {
    const [singleEvent, setSingleEvent] = useState({})

    const { id } = useParams()
    const events = useLoaderData()

    useEffect(() => {
        const selectedEvent = events?.find(singleEvent => singleEvent.id == id)
        setSingleEvent(selectedEvent)

    }, [id, events])
    console.log(singleEvent)
    const {  date, image, location, price,description ,eventName}= singleEvent
    console.log(date)

    return (
        <div className='mt-10 flex flex-col md:flex-col lg:flex-row justify-around items-center gap-4 mb-10'>




            <div className='flex-1'>
  <img className='' src={image} alt="" />
            </div>
            <div className='bg-gray-100 flex-1 p-4'>
                <h1 className='text-3xl font-bold text-blue-400'>{eventName}</h1>
                <p className='text-xl mt-3 text-base-400'>{description}</p>

<p className='text-xl mt-2 text-blue-400 font-semibold'>Event Date: {date}</p>
<p className='mt-3 text-lg'>Place: {location}</p>
<p className='text-xl mt-2 font-bold'>Price 

: {price} $</p>
<button className='btn bg-blue-400 text-white border-none rounded-none mt-2 font-bold text-xl'>Book Now </button>
            </div>

        </div>
    );
};

export default Events;