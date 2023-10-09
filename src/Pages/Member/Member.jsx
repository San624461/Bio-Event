import React from 'react';
import member1 from '../../assets/member1.png'
import member2 from '../../assets/member2.png'
import member3 from '../../assets/member3.png'
import trusted1 from '../../assets/trusted1.png'
import trusted2 from '../../assets/truested2.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

const Member = () => {
    return (
        <>

            <h1 className='text-4xl font-bold text-center'>Browse the cost-savings options for your organization</h1>

            <div className='mb-20 mt-3 grid grid-cols-1 mx-auto md:grid-cols-1 lg:grid-cols-3 gap-6 '>


                <div>
                    <div className='relative mt-3 mb-8'>
                        <img className='' src={member1} alt="" />
                        <div className='absolute left-6 lg:-bottom-16 lg:left-44 md:-bottom-12 md:left-16'>
                            <div className='bg-white w-full md:w-full lg:w-full p-10 shadow-md hidden md:block lg:block' >
                                <h1 className='text-xl md:text-3xl lg:text-3xl'>Facilities and Operation</h1>
                                <p>Discounts on products and services to help you run your lab and facilities efficiently.</p>

                                <button className='btn btn-link'>Learn More</button>

                            </div>

                        </div>

                    </div>
                    <div className='block md:hidden lg:hidden bg-gray-200 pt-8 px-4'>
                        <h1 className='text-xl font-bold'>Facilities and Operation</h1>
                        <p>Discounts on products and services to help you run your lab and facilities efficiently.</p>
                        <button className='btn btn-link mb-10'>Learn More</button>
                    </div>

                </div>

                <div>
                    <div className='relative mt-3 mb-8'>
                        <img className='' src={member2} alt="" />
                        <div className='absolute left-6 lg:-bottom-16 lg:left-44 md:-bottom-12 md:left-16'>
                            <div className='bg-white w-full md:w-full lg:w-full p-10 shadow-md hidden md:block lg:block' >
                                <h1 className='text-xl md:text-3xl lg:text-3xl'>HR & Insurance</h1>
                                <p>Access premium business insurance and HR administration services for your company.</p>

                                <button className='btn btn-link'>Learn More</button>

                            </div>

                        </div>

                    </div>
                    <div className='block md:hidden lg:hidden bg-gray-200 pt-8 px-4'>
                        <h1 className='text-xl font-bold'>Everyday Business Services</h1>
                        <p>Save on everyday necessities, like office supplies, shipping, corporate credit cards, and more</p>
                        <button className='btn btn-link mb-10'>Learn More</button>
                    </div>

                </div>

                <div>
                    <div className='relative mt-3 mb-8'>
                        <img className='' src={member3} alt="" />
                        <div className='absolute left-6 lg:-bottom-16 lg:left-44 md:-bottom-12 md:left-16'>
                            <div className='bg-white w-full md:w-full lg:w-full p-10 shadow-md hidden md:block lg:block' >
                                <h1 className='text-xl md:text-3xl lg:text-3xl'>Facilities and Operation</h1>
                                <p>Discounts on products and services to help you run your lab and facilities efficiently.</p>

                                <button className='btn btn-link'>Learn More</button>

                            </div>

                        </div>

                    </div>
                    <div className='block md:hidden lg:hidden bg-gray-200 pt-8 px-4'>
                        <h1 className='text-xl font-bold'>Facilities and Operation</h1>
                        <p>Discounts on products and services to help you run your lab and facilities efficiently.</p>
                        <button className='btn btn-link mb-10'>Learn More</button>
                    </div>

                </div>
            </div>



            <h1 className='text-4xl font-bold text-center mb-7 mt-7'>Trusted by the life sciences community</h1>
            <div>
                <div>

                    <div className="hero shadow-xl">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={trusted1} className=" rounded-lg shadow-2xl" />
                            <div className='m-20'>

                                <p className="py-6 font-sans text-2xl text-justify ">'BIO Business Solutions offers StemBioSys access to world-class business  partners at preferred prices. For a small company like ours, this combination is clearly a win-win proposition!'</p>

                                <p className='font-bold'> Bob Hutchens</p>
                                <small> <p>President & CEO, StemBioSys</p></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    <div className="hero shadow-xl mt-5 mb-8">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={trusted2} className=" rounded-lg shadow-2xl" />
                            <div className='m-20'>

                                <p className="py-6 font-sans text-2xl text-justify ">'We are using programs for things like office supplies and lab supplies and the savings come out to about 200K a year. That’s money we’ve been able to invest right back into our research so BIO Business Solutions has definitely been a great choice for us.'</p>

                                <p className='font-bold'> Dave Lawrence</p>
                                <small> <p>CBO, Acorda Therapeutics</p></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <h1 className='text-4xl font-bold text-center mb-7 mt-7'>Frequently Asked Questions</h1>


            <div className="join join-vertical w-full mb-8">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        What is BIO Business Solutions? How does BIO Business Solutions work?
                    </div>
                    <div className="collapse-content">
                        <p>BIO Business Solutions is the largest cost savings program for the life sciences industry, operated by BIO. BIO Business Solutions negotiates significant volume-based discounts, favorable terms, and other benefits on products and services with industry leading suppliers on behalf of BIO members and the members of state and regional biotech associations.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        What is BIO (Biotechnology Innovation Organization)?
                    </div>
                    <div className="collapse-content">
                        <p>The Biotechnology Innovation Organization (BIO) is the world’s largest trade association representing the life sciences industry. BIO members are leading the research and development of innovative healthcare, agriculture, industrial, and environmental products. We bring members together with others in the industry and advocate around the world for policies and regulations that support the needs of biotech businesses large and small.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Who is eligible to join the program?
                    </div>
                    <div className="collapse-content">
                        <p>The BIO Business Solutions program is available to all BIO member companies and of members of all participating state and regional biotech associations. There is no charge for member companies to participate in the program as it is a benefit of membership. Member companies can take advantage of one, some, or all of the special pricing arrangements offered through the BIO Business Solutions program. Click here for a list of state/regional associations that offer BIO Business Solutionsto their member companies.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        What are the advantages of participating in the BIO Business Solutions program?
                    </div>
                    <div className="collapse-content">
                        <p>Over 4,700 companies currently use BIO Business Solutions and, together, save over $705 million annually through the program. The discounted prices and value-added features available are negotiated based on the pooled buying power of thousands of life sciences companies of all sizes across North America, giving you the same purchasing power as the largest life sciences companies.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Are these cost-savings programs only for life science companies?
                    </div>
                    <div className="collapse-content">
                        <p>While some of the individual BIO Business Solutions programs are relevant only to life science companies, a few programs are applicable and available to any company in any industry!</p>
                    </div>
                </div>
            </div>


            <h1 className='text-4xl font-bold text-center mb-7 mt-7'>How can the BIO Business Solutions Customer Success Team Help?</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 ml-10 md:ml-0 lg:ml-0'>


                <div className="card w-[80%] bg-base-100 shadow-xl">
                    <div className="avatar flex justify-center">
                        <div className="w-24 rounded-full">
                            <img src={img1} />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Tamy Dalal</h2>
                        <p>888.246.1728 • General Inquires</p>
                        <div className="card-actions">
                            <button className="btn btn-link font-bold">Contact </button>
                        </div>
                    </div>
                </div>
                <div className="card  w-[80%]  bg-base-100 shadow-xl">
                    <div className="avatar flex justify-center">
                        <div className="w-24 rounded-full">
                            <img src={img2} />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Peter Frey</h2>
                        <p>202.438.0907 • Western US</p>
                        <div className="card-actions">
                            <button className="btn btn-link font-bold">Contact </button>
                        </div>
                    </div>
                </div>
                <div className="card  w-[80%]  bg-base-100 shadow-xl">
                    <div className="avatar flex justify-center">
                        <div className="w-24 rounded-full">
                            <img src={img3} />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Bob Dearth</h2>
                        <p>781.716.7555 • Eastern US</p>
                        <div className="card-actions">
                            <button className="btn btn-link font-bold">Contact </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Member;