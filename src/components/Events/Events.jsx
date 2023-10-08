import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventCard from '../EventCard/EventCard';
// this is event for home page
const Events = () => {

    const events = useLoaderData()

    return (
        <div className='mt-6'>
            <h1 className='text-left text-4xl text-gray-500 mb-3'>All Events</h1>
            <div>
                {



                    events.map(event => <EventCard key={event.id} event={event}></EventCard>)

                }
            </div>
        </div>
    );
};

export default Events;