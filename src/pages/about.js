import React from 'react';
import Footer from '../components/footer';
import Desktop from '../images/desktop.jpg';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/button';

const About = () => {
  return (
    <>
      <Layout>
        <SEO title="About" />
        <div className="h-full">
          <div className="flex flex-col justify-center px-2 mt-10 md:mt-36">
            <h1 className="my-3 text-2xl font-normal text-center md:text-5xl">
              {'We are a team'}
            </h1>
            <h1 className="text-2xl font-normal text-center md:text-5xl">
              {'of'}
            </h1>
            <h1 className="mt-3 text-2xl font-medium text-center uppercase md:text-5xl">
              {'Digital creatives'}
            </h1>
          </div>
          <div className="px-6 mt-20">
            <div className="relative flex justify-center">
              <img src={Desktop} alt="" className="relative md:w-3/5" />
            </div>
          </div>
          <div className="mt-20">
            <p className="px-6 m-auto text-center sm:w-2/5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            </p>
            <p className="px-6 m-auto mt-8 text-center sm:w-2/5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            </p>
          </div>
          <div className="flex justify-center my-10">
            <Button
              buttonName={`CHECK OUT SOME OF OUR WORKS`}
              pathName={`/works`}
              className="ml-0"
            />
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default About;
