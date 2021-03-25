import * as React from "react"
import HomeIcon from '../images/home.svg'
import CalIcom from '../images/account.svg'
import PolIcon from '../images/policy.svg'

const Footer = () => (
  <div className="hidden bg-blue-550 md:block">
    <h1 className="pt-10 text-2xl font-semibold text-center text-white font-Jost">Our Services</h1>

    <div className="flex items-center justify-between mt-10 px-28">
      <div className="flex flex-col items-center justify-center">
        <img src={HomeIcon} alt="" className="w-8" />
        <hr className="w-10 mt-3 border-2 border-white" />
        <h3 className="mt-6 text-2xl font-semibold text-center text-white font-Jost">Web Design</h3>
        <p className="max-w-xs mt-4 text-base font-medium leading-6 text-center text-white">We design and develop standard and pretty websites that convert visitors and deliver engaging experiences to them.</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src={PolIcon} alt="" className="w-8" />
        <hr className="w-10 mt-3 border-2 border-white" />
        <h3 className="mt-6 text-2xl font-semibold text-center text-white font-Jost">{"Brand & Graphics Design"}</h3>
        <p className="max-w-xs mt-4 text-base font-medium leading-6 text-center text-white">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src={CalIcom} alt="" className="w-8" />
        <hr className="w-10 mt-3 border-2 border-white" />
        <h3 className="mt-6 text-2xl font-semibold text-center text-white font-Jost">Digital Marketing</h3>
        <p className="max-w-xs mt-4 text-base font-medium leading-6 text-center text-white">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
      </div>
    </div>

    <div className="px-10 mt-10">
      <hr className="border border-white" />
    </div>

    <div className="flex justify-between py-8 text-white px-28">
      <p className="text-xs font-medium uppercase">&copy; {`${new Date().getFullYear()} Carvengate`}</p>
      <div className="flex">
        <div>Social1</div>
        <div>Social2</div>
        <div>Social3</div>
      </div>
    </div>
  </div>
)

export default Footer
