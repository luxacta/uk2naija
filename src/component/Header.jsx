import { useState } from "react";
import {Link, NavLink} from "react-router-dom";
import Menu from "../api/Menu";

const Header = () => {

  //Initialising a toggle state for the Navbar
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const scrollNavBar = () => {
    if(window.scrollY >= 110){
      setScrollNav(true);
    } else {
      setScrollNav(false);
    };
  };
 window.addEventListener('scroll', scrollNavBar);

  //Fetching Menu item from Menu.js using Array Map
  const navItem = Menu.map(menu => {
    return(
      <li key={menu.id}
        className="py-2 pl-4 font-medium border-b border-b-gray lg:border-none transition-all duration-[400ms] ease-in-out text-dark hover:text-red">
      <NavLink to={menu.link} className={({ isActive }) => isActive ? 'text-red' : '' }>
        {menu.name}
      </NavLink>
    </li>
    );
  });

  return(
    <header>
      {/* Header Top */}
      {/* This Section contain the topmost part of the website... */}
      <div className="bg-green">
        <div className="container">
          <div className="text-center md:text-left md:flex md:flex-wrap md:justify-between text-white text-sm py-2">
            <p className="px-2 md:border-dotted md:border-x">Chat with UVA on WhatsApp :
              <a href="https://wa.me/2348093482222" target="_blank" rel="noopener noreferrer" className="font-bold">
                +234 809 348 2222
              </a>
            </p>
            <span className="hidden md:block ">
              <Link to="/login" className="px-2 md:border-dotted md:border-x hover:text-gray transition">
                Get Your UK/US/Europe Address
              </Link>
              <Link to="/contact" className="px-2 md:border-dotted md:border-x hover:text-gray transition">
                Contact
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* NavBar Section */}
      <nav className={scrollNav ? "w-full fixed top-0 left-0 z-20 bg-[#f8f8f8] shadow py-4" : "bg-white py-4" }>
        <div className="container">
          <div className="flex justify-between items-center">
          
            {/* Website Logo */}
            <Link to="/">
              <img 
                src={`${process.env.REACT_APP_ROOTURL}/logo.png`} 
                alt={`${process.env.REACT_APP_NAME} Logo`} 
                className=" uppercase w-36 md:w-40 max-w-full" 
              />
            </Link>

            {/* Menu - This contain the list of navigation which is been called form menu.js api */}
            <ul className={`lg:flex gap-x-[0.75rem] fixed lg:static pt-28 lg:pt-0 top-0 left-0 bg-[#fdfdfd] lg:bg-transparent transition-all ease-linear uppercase z-10 h-screen lg:h-auto w-3/5 lg:w-auto max-w-[270px] lg:max-w-full lg:ml-0 ${!isOpen ? '-ml-80' : 'ml-0'}`}>
              {navItem}
            </ul>

            <div className="flex items-center gap-2">
              <Link to="/login" className="btn btn-link flex items-center gap-1 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" >
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 1 1 14 0v1zm-2 0V9A5 5 0 0 0 7 9v1h10zm-6 4v4h2v-4h-2z" fill="rgba(0,0,0,1)"/>
                </svg> Login
              </Link>
              <Link to="/register" className="hidden xs:block btn btn-red mt-1">
                Sign up
              </Link>

              {/* Hamburger - THis will only appear in mobile and tablet, it shows and hide menu */}
              <button className="flex lg:hidden flex-col h-8 w-8 justify-center items-center group" onClick={() => {setIsOpen(prevState => !prevState)}}>
                <div className={`h-[3px] w-6 my-[3px] transition ease transform duration-300 bg-dark ${ isOpen ? "rotate-45 translate-y-[0.55rem] opacity-75 group-hover:opacity-100" : "opacity-75 group-hover:opacity-100" }`}/>
                <div className={`h-[3px] w-6 my-[3px] transition ease transform duration-300 bg-dark ${ isOpen ? "opacity-0" : "opacity-75 group-hover:opacity-100" }`} />
                <div className={`h-[3px] w-6 my-[3px] transition ease transform duration-300 bg-dark ${ isOpen ? "-rotate-45 -translate-y-[0.55rem] opacity-75 group-hover:opacity-100" : "opacity-75 group-hover:opacity-100" }`}/>
              </button>
              {/* Hamburger */}
            </div>
            {/* NavBar End */}
          </div>
        </div>
      </nav>     
    </header>
  );
};
export default Header;