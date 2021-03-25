import React, { useEffect } from "react"
import Footer from "../components/footer"
import WorksImg from "../images/work.png"
import MacBook from "../images/macbook.png"
import Desktop from "../images/desktop.png"
import Business from "../images/business.png"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

const IndexPage = () => {
  useEffect(() => {
    let elemIndex = 0
    let elem2Index = 0
    let timer

    const carousel = () => {
      const elem = document.getElementsByClassName("caroImg")
      const elem2 = document.getElementsByClassName("carImg")

      for (let i = 0; i < elem.length; i++) {
        elem[i].style.display = "none"
      }
      for (let i = 0; i < elem2.length; i++) {
        elem2[i].style.display = "none"
      }
      elemIndex++
      elem2Index++
      if (elemIndex > elem.length) elemIndex = 1
      elem[elemIndex - 1].style.display = "block"

      if (elem2Index > elem2.length) elem2Index = 1
      elem2[elem2Index - 1].style.display = "block"
      timer = setTimeout(carousel, 3000)
    }
    carousel()

    return () => {
      clearTimeout(timer)
    }
  }, [])



  return (
    <>
      <Layout>
        <SEO title="Home" />
        <div className="h-full">
          <section>
            <div className="flex flex-col justify-center px-2 mt-10 md:mt-52">
              <h1 className="my-3 text-2xl font-normal text-center uppercase md:text-5xl font-Jost">
                {"We create digital"}
              </h1>
              <h1 className="text-2xl font-normal text-center uppercase md:text-5xl font-Jost">
                {"Identities & experiences."}
              </h1>
            </div>
            <div className="mt-6 mb-20">
              <div className="relative flex justify-center">
                <img src={MacBook} alt="" className="relative md:w-3/5" />
                <img
                  src={Desktop}
                  alt=""
                  className={`hidden caroImg absolute w-17rem md:w-37rem md:top-0.5`}
                />
                <img
                  src={WorksImg}
                  alt=""
                  className={`hidden caroImg absolute w-17rem md:w-37rem top-0.5`}
                />
                <img
                  src={Business}
                  alt=""
                  className={`hidden caroImg absolute w-60 top-3 md:w-30rem md:top-7`}
                />
              </div>
              <div className="relative hidden md:flex -top-96 left-70rem">
                <img src={WorksImg} alt="" className="absolute hidden carImg w-37rem -top-12" />
                <img src={Business} alt="" className="absolute hidden carImg w-30rem" />
                <img
                  src={Desktop}
                  alt=""
                  className="absolute hidden carImg w-37rem -top-12"
                />
              </div>
            </div>
          </section>
          <section>
            <div className="h-full px-10 py-10 md:py-20 bg-blue-trans md:px-28">
              <h2 className="text-2xl font-semibold text-center font-Jost">
                Recent Works
              </h2>
              <div className="items-center justify-between block mt-12 mb-20 md:flex">
                <div className="rounded-md md:w-1/2 bg-blue-950">
                  <img src={WorksImg} alt="" className="" />
                </div>
                <div className="flex flex-col md:w-2/5">
                  <p className="mt-6 text-base font-medium font-Jost md:mt-0">Web Design</p>
                  <h2 className="my-4 text-xl font-semibold">
                    Arik Air Landing Page Design
                  </h2>
                  <p className="text-sm font-medium leading-8">
                    {
                      "We are a digital agency that specialises in graphics & brand design, software development & digital marketing services"
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
                  <p className="mt-6 text-base font-medium font-Jost md:mt-0">Web Design</p>
                  <h2 className="my-4 text-xl font-semibold">
                    Arik Air Landing Page Design
                  </h2>
                  <p className="text-sm font-medium leading-8">
                    {
                      "We are a digital agency that specialises in graphics & brand design, software development & digital marketing services"
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
          </section>
        </div>
      </Layout>
      <Footer />
    </>
  )
}

export default IndexPage
