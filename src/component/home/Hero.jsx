import { Link } from "react-router-dom";
import emblem from "../../assets/emblem.png";

const Hero = () => {
  return(
    <section className = "relative w-full h-[450px] lg:h-[500px]">
        <div className = "w-full h-full absolute inset-0 bg-hero bg-no-repeat bg-cover bg-center origin-center" > </div> 
        <div className = "w-[inherit] h-[inherit] bg-darkblue opacity-90 absolute" > </div> 
        <div className = "w-[inherit] h-[inherit] absolute">
          <div className = "w-full h-full">
            <div className = "container h-full">
              <div className = "w-full h-[inherit] flex flex-wrap justify-between items-center">
                <div className = "text-white py-4" >
                  <h1 className = "uppercase text-xl lg:text-2xl leading-relaxed lg:leading-loose">
                    Your Best and Reliable Way to < br className="mb-3" />
                    <span className = "text-4xl lg:text-5xl font-medium"> Buy and Ship </span> < br className="mb-3" />
                    <span className = "text-6xl lg:text-7xl font-black"> Globally </span> 
                  </h1>

                  <ul className = "mb-8 mt-4 text-sm lg:text-lg" >
                    <li className = "mb-2 lg:mb-1" >&#x2611; &nbsp; Get A FREE Dedicated UK/US/EU Delivery Address.</li> 
                    <li className = "mb-2 lg:mb-1" >&#x2611; &nbsp; Shop &amp; Ship What You Love From Your Favourite Stores.</li> 
                    <li className = "mb-2 lg:mb-1" >&#x2611; &nbsp; Save BIG With Our Fast, Secure &amp; Affordable Doorstep Delivery.</li> 
                  </ul>

                  <div className = "flex flex-wrap item-center gap-4" >
                    <Link to = "/login" className = "btn-md lg:btn-lg lg:py-3 lg:px-6 btn-red" > Get Started </Link>
                  </div> 
                </div> 
                <img className = "hidden md:block w-56 lg:w-64 pr-4" src = { emblem } alt = "Emblem" />
              </div> 
            </div> 
          </div> 
        </div> 
      </section> 
  );
};
export default Hero;