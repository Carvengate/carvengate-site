import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../images/carvengate-logo.png';
import Button from './button';

const Header = () => {
  const [state, setState] = useState(false);

  const toggleMenu = () => {
    setState(!state);
  };

  return (
    <header className="relative flex items-center justify-between pl-6 pr-6 mt-2 sm:pr-16 sm:pl-10">
      <Link to="/" className="flex items-center justify-center">
        <img src={logo} className="w-6 sm:w-10" alt="" />
        <p className="text-xs font-medium tracking-widest font-Jost sm:text-base">
          CARVENGATE
        </p>
      </Link>
      <nav className="items-center justify-center hidden sm:flex">
        <Link
          to="/"
          className="mx-1 text-xs font-semibold sm:mx-4"
          activeClassName="text-blue-550"
        >
          HOME
        </Link>
        <Link
          to="/about"
          className="mx-1 text-xs font-semibold sm:mx-4"
          activeClassName="text-blue-550"
        >
          ABOUT
        </Link>
        <Link
          to="/works"
          className="mx-1 text-xs font-semibold sm:mx-4"
          activeClassName="text-blue-550"
        >
          WORKS
        </Link>
        <Button buttonName={`HIRE US`} />
      </nav>
      <div
        role="menuitem"
        className="relative z-50 flex flex-col cursor-pointer sm:hidden"
        onClick={toggleMenu}
        tabIndex="0"
        onKeyDown={toggleMenu}
      >
        <span
          className={`${
            state
              ? 'bg-white rotate-45 transform mb-0 origin-center ease-linear duration-300'
              : 'bg-gray-700 mb-1'
          } w-6 h-px mx-0 `}
        ></span>
        <span
          className={`${
            state
              ? 'bg-white transform -rotate-45 mb-0 origin-center ease-linear duration-300'
              : 'bg-gray-700 mb-1'
          } w-6 h-px mx-0`}
        ></span>
        <span
          className={`${
            state ? 'bg-white hidden' : 'bg-gray-700'
          } w-4 h-px mx-0 mb-1`}
        ></span>
      </div>
      {state && (
        <div className="absolute z-40 w-1/2 text-white bg-blue-550 left-1/2 sm:hidden -top-32/100">
          <nav className="px-8 mt-14">
            <ul>
              <li className="my-4 font-medium">
                <Link to="/">Home</Link>
              </li>
              <li className="my-4 font-medium">
                <Link to="/about">About</Link>
              </li>
              <li className="my-4 font-medium">
                <Link to="/works">Works</Link>
              </li>
              <li className="my-4 mb-8 font-medium">
                <Link to="#">Hire Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
