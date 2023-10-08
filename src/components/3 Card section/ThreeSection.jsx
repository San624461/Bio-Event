import  { useEffect, useState } from 'react';

const ThreeSection = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/data2.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 '>
           {
            data.map(section=> (
                <div key={section.name}>

<div className="card w-full  bg-base-100 shadow-xl">
  <figure className=" ">
    <img src={section.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[#4196CC] ">{section.name}</h2>
    <p className=''>{section.date}</p>
    <p className=''>{section.location}</p>
    <div className="card-actions">
      <button className=' text-[#4196CC] font-semibold'>Register Now</button>
    </div>
  </div>
</div>
                </div>
            ))
           }
           

        </div>
    );
};

export default ThreeSection;