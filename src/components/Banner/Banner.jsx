
import Aos from 'aos';
import image from '../../assets/endless-constellation.png'
import { useEffect } from 'react';




const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500, // Set the duration of animations
      offset: 100, // Set the offset (in pixels) where the animation triggers
      easing: 'ease-in-out', // Set the easing for animations
      once: true, // Set whether animations should occur only once
    });
  }, []);



  return (
    <div data-aos="fade-up"
      className="relative h-[80vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="ml-6 absolute inset-0 flex flex-col justify-center items-start text-white space-y-2 p-10 mb-12">
        <h1 className="text-4xl font-bold mb-4 text-center sm:text-5xl md:text-5xl lg:text-6xl mt-12">
          BIO Events
        </h1>
        <p className="text-lg md:text-xl text-left ">
          Discover important industry trends. Identify crucial investment opportunities. Establish valuable professional partnerships.
        </p>
        <p className="text-left text-xs md:text-sm hidden md:block">
          As the largest global non-profit biotechnology trade association representing startups to Fortune 500  <br />companies,  BIO is proud to host a portfolio of partnering conferences that not only unite and empower biotech innovators and their ecosystem to improve lives,<br /> but also offer a broad and unbiased venue to seek investment and BD&L opportunities. Review our comprehensive list of events below.
        </p>

      </div>
    </div>

  );
}




export default Banner;