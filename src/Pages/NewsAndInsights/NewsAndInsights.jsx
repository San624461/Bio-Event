import React from 'react';
import { useLoaderData } from 'react-router-dom';

const NewsAndInsights = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>

            <h1 className='mt-5 text-4xl font-bold text-gray-400 mb-3 text-center'>All News And Insights</h1>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

           {
                data.map(news => ( 

                   
                    <div key={news.id}  className=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 text-left">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{news?.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{news?.news_details}</p>
                        <a href={news.news_link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#07AFAA] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Learn More
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                    
                ))
            }

           </div>
        </div>
    );
};

export default NewsAndInsights;