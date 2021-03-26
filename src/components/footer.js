import * as React from 'react';
import webDesign from '../images/webDesign.svg';
import digitalMarketing from '../images/digitalMarketing.svg';
import brandDesign from '../images/brandDesign.svg';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';

const Footer = () => (
  <div className="hidden bg-blue-550 md:block">
    <h1 className="pt-10 text-2xl font-semibold text-center text-white font-Jost">
      Our Services
    </h1>

    <div className="flex items-center justify-between mt-10 md:px-12">
      <div className="flex flex-col items-center justify-center">
        <img src={webDesign} alt="" className="w-10" />
        <hr className="w-10 mt-3 border-2 border-white" />
        <h3 className="mt-6 text-2xl font-semibold text-center text-white font-Jost">
          Web Design
        </h3>
        <p className="max-w-xs mt-4 text-base font-medium leading-6 text-center text-white">
          We design and develop standard and pretty websites that convert
          visitors and deliver engaging experiences to them.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src={brandDesign} alt="" className="w-8" />
        <hr className="w-10 mt-3 border-2 border-white" />
        <h3 className="mt-6 text-2xl font-semibold text-center text-white font-Jost">
          {'Brand & Graphics Design'}
        </h3>
        <p className="max-w-xs mt-4 text-base font-medium leading-6 text-center text-white">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src={digitalMarketing} alt="" className="w-8" />
        <hr className="w-10 mt-3 border-2 border-white" />
        <h3 className="mt-6 text-2xl font-semibold text-center text-white font-Jost">
          Digital Marketing
        </h3>
        <p className="max-w-xs mt-4 text-base font-medium leading-6 text-center text-white">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        </p>
      </div>
    </div>

    <div className="px-10 mt-10">
      <hr className="border border-white" />
    </div>

    <div className="flex justify-between py-8 text-white px-28">
      <p className="text-xs font-medium uppercase">
        &copy; {`${new Date().getFullYear()} Carvengate`}
      </p>
      <div className="flex">
        <a href={'https://twitter.com/carvengate'}>
          <img src={twitter} alt="" className="" />
        </a>
        <a href={'https://www.instagram.com/carvengate/'}>
          <img src={instagram} alt="" className="mx-6" />
        </a>
        <a href={'https://www.facebook.com/carvengate/'}>
          <img src={facebook} alt="" className="" />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
