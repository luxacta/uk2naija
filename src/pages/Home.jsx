import { useState } from "react";
import Hero from "../component/home/Hero";
import GetEstimate from "../component/home/GetEstimate";
import TrackShipment from "../component/home/TrackShipment";
import Video from "../component/home/Video";
import uva from "../assets/uva.png";
import model from "../assets/model.png";

const Home = () => {

  const [currentTab, setCurrentTab] = useState(1);
  
  return ( 
    <main>
      <Hero />
      <section className = "relative w-full -mt-10 mb-8">
        <div className = "container">
          <ul className = "inline-flex flex-wrap space-x-2 md:space-x-4 mt-4 bg-white" >
            <li className = {`px-4 md:px-6 py-3 cursor-pointer bg-white ${currentTab === 1 ? 'text-red border-b-2 border-red' : 'text-black'}`} onClick = {() => setCurrentTab(1)} > Get an estimate </li> 
            <li className = {`px-4 md:px-6 py-3 cursor-pointer bg-white ${currentTab === 2 ? 'text-red border-b-2 border-red' : 'text-black'}`} onClick = {() => setCurrentTab(2)} > Track Shipment </li> 
          </ul> 
          <GetEstimate className={currentTab === 1 ? "flex" : "hidden"} />
          <TrackShipment className={currentTab === 2 ? "flex" : "hidden"} />
        </div>  
      </section> 
      <section className="w-full h-full mb-8 lg:bg-gradient-to-r from-[#F0434A] via-[#FA2931] to-[#AE090F]">
        <div className="container">
          <div className="w-full h-full flex flex-wrap">
            <div className="w-full lg:w-4/12 bg-[#F0434A] text-white py-12 px-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
              <h3 className="text-lg font-bold my-4">GET A UK/USA/EU ADDRESS</h3>
              <p className="font-medium mb-6">We provide you a dedicated UK/US/Europe delivery address to use for all your shopping.</p>
              <a href="/login" >Click here &#8227;</a>
            </div>
            <div className="w-full lg:w-4/12 bg-[#FA2931] text-white py-12 px-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
              </svg>
              <h3 className="text-lg font-bold my-4">UK2NAIJA DEBIT CARD</h3>
              <p className="font-medium mb-6"> Get a GBP (£) UK Debit Card: Spend up to £100k per month & 5% cash-back per spend.</p>
              <a href="/login">Click here &#8227;</a>
            </div>
            <div className="w-full lg:w-4/12 bg-[#AE090F] text-white py-12 px-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
              </svg>
              <h3 className="text-lg font-bold my-4">WE CAN HELP YOU PAY</h3>
              <p className="font-medium mb-6">Payment Issues? Let us purchase the items for you. We can purchase online or in store.</p>
              <a href="/login">Click here &#8227;</a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="container">
          <div className="flex flex-wrap justify-around items-center -mx-4">
            <div className="w-full md:w-6/12 px-4">
              <img src={model} alt="model" />
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="w-full flex flex-wrap gap-4">
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto bg-green py-8 md:py-2 lg:py-12 mb-8">
        <div className="container">
          <div className="flex flex-wrap justify-around items-center -mx-4">
            <div className="w-full md:w-7/12 px-4 mb-6 md:mb-0">
              <h2 className="text-lg font-medium text-white mb-4">Get real time support and service today</h2>
              <h4 className="text-2xl font-bold text-white leading-relaxed tracking-wide mb-10">
                Chat with < br />
                <span className="flex items-center gap-x-2 leading-snug my-1.5">
                  <span className="text-6xl md:text-7xl font-black">UVA</span> 
                  <span className="font-bold text-xl">(UK2NAIJA VIRTUAL ASSISTANT)</span>
                </span>
                <span className="text-3xl flex items-end gap-x-2">
                  <span>On WhatsApp</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16" className="transform animate-bounce">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                </span>
              </h4>
              <a href="https://wa.me/2348093482222" target="_blank" className="text-center text-white font-medium py-2.5 px-6 border hover:-translate-y-0.5 transform transition rounded" rel="noreferrer" >Start Chat</a>
            </div>
            <div className="w-full md:w-5/12 px-4 mt-8">
              <div className="flex justify-center items-center content-center">
                <div className="w-72 h-72 bg-white rounded-full">
                  <img src={uva} alt="UVA" className="w-full h-full rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mb-8">
        <div className="container">
          <div className="flex flex-wrap justify-around items-center -mx-4">
            <Video />
            <div className="w-full lg:w-1/2 px-4 xl:px-14 mt-6 lg:mt-0">
              <h3 className="font-bold text-lg md:text-xl 2xl:text-2xl text-black mb-3">We are reliable &amp; excellent in service</h3>
              <p className="text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;