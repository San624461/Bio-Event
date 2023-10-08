import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {

    const { eventName, id, location, image, price, date,intro} = event
  
    return (
        <div className='mt-3 mb-10'>
            <div><img className='w-[50%] md:w-[30%] lg:w-[20%] mx-auto' src={image} alt="" /></div>
            <div className='shadow-lg h-[40%] flex flex-col md:flex-col lg:flex-row justify-between items-center p-10 space-y-3'>

                <div className="badge bg-[#3D287A] text-white p-5 rounded-none">{date}</div>

                <div>



                    <div >

                        <h1 className=' text-center text-2xl md:text-xl lg:text-3xl  md: lg:mr-16 text-blue-400'> {eventName}</h1>

                        <div className='flex justify-around items-center gap-3 flex-col'>
                            <p className='text-gray-500 mt-2'>{date}</p>
                            <p className='mt-2 text-center'>{location}</p>
                            <p className='text-center'>{intro}</p>
                        </div>

                       
                    </div>

                </div>
                <div >
                    <button className='btn bg-[#3D287A] text-white pb-3 pt-3 rounded-none'>
                       <Link to={`/events/${id}`}> Learn More</Link>
                    </button>
                </div>

            </div>


        </div>
    );
};

export default EventCard;