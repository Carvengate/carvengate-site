import React from 'react';
import Footer from '../components/footer';
import WorksImg from '../images/work.png';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/button';

const Works = () => {
  return (
    <>
      <Layout>
        <SEO title="Works" />
        <div className="h-full px-10 py-10 md:py-20 md:px-28">
          <h2 className="text-2xl font-semibold text-center py-14 font-Jost">
            Our Works
          </h2>
          <div className="items-center justify-between block mt-12 mb-20 md:flex">
            <div className="rounded-md md:w-1/2 bg-blue-950">
              <img src={WorksImg} alt="" className="" />
            </div>
            <div className="flex flex-col md:w-2/5">
              <p className="mt-6 text-base font-medium font-Jost md:mt-0">
                Web Design
              </p>
              <h2 className="my-4 text-xl font-semibold">
                Arik Air Landing Page Design
              </h2>
              <p className="text-sm font-medium leading-8">
                {
                  'We are a digital agency that specialises in graphics & brand design, software development & digital marketing services'
                }
              </p>
              <div className="w-24 mt-4">
                <Button buttonName={`DETAILS`} className="ml-0" />
              </div>
            </div>
          </div>
          <div className="items-center justify-between block md:flex">
            <div className="rounded-md md:hidden md:w-1/2 bg-blue-950">
              <img src={WorksImg} alt="" className="" />
            </div>
            <div className="flex flex-col md:w-2/5">
              <p className="mt-6 text-base font-medium font-Jost md:mt-0">
                Web Design
              </p>
              <h2 className="my-4 text-xl font-semibold">
                Arik Air Landing Page Design
              </h2>
              <p className="text-sm font-medium leading-8">
                {
                  'We are a digital agency that specialises in graphics & brand design, software development & digital marketing services'
                }
              </p>
              <div className="w-24 mt-4">
                <Button buttonName={`DETAILS`} className="ml-0" />
              </div>
            </div>
            <div className="hidden rounded-md md:block md:w-1/2 bg-blue-950">
              <img src={WorksImg} alt="" className="" />
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Works;
