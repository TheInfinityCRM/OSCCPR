import Head from "next/head";
import { NextPageWithLayout } from "@customTypes/layouts";
import { ReactElement } from "react";
import ClientLayout from "@layouts/clientLayout/clientLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Heading from "@components/heading";
import Button from "@components/button";
import { homeSlides } from "@data/waterslides";
import React from "react";
import Link from "next/link";
import { events } from "@data/events";
import Accordion from "@components/accordion";
import { accordion } from "@data/accordion";
import Card from "@components/card";
import { FiPhone } from "react-icons/fi";
import {SlLocationPin} from "react-icons/sl"
import {MdEmail} from "react-icons/md"
import { carouselItems } from "@data/carousel";



const Home: NextPageWithLayout = () => {
  const [slidesData, setShowSlidesData] = React.useState<number>(0);
  const [activeAccordion, setActiveAccordion] = React.useState<number | null>(
    null
  );

  const handleAccordionClick = (index: number) => {
    if (index === activeAccordion) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Welcome to Ocean State Costume Characters and Party Rentals, your hub for extraordinary celebrations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-h-screen overflow-hidden relative bg-black">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          showArrows={false}
          stopOnHover={false}
        >
          {carouselItems.map((item) => (
            <div key={item.id}>
              <div className="w-full h-screen relative">
                <Image
                  src={item.image}
                  alt={`Carousel item ${item.id}`}
                  className={`w-full h-full object-cover ${
                    item.id === 1
                      ? "object-right"
                      : item.id === 2
                      ? "object-center"
                      : item.id === 3
                      ? "object-left"
                      : item.id === 4
                      ? "object-center"
                      : item.id === 5
                      ? "object-center"
                      : "object-right"
                  } md:"object-center"`}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div
                    className="text-white font-bold font-montserrat text-3xl md:text-5xl w-auto text-center mb-6"
                    style={{ lineHeight: "4rem" }}
                  >
                    {item.tagline}
                  </div>
                  <Button type="small" title="View more" />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="bg-black">
        <div className="container">
          <div className="py-10" id="about">
            <div className="flex justify-center items-center py-6">
              <Heading title="About Us" />
            </div>
            <p className="text-white font-montserrat leading-7 mx-6 py-6">
              Welcome to Ocean State Costume Characters and Party Rentals, your
              hub for extraordinary celebrations. We specialize in sprinkling
              magic on your events with our range of high quality costume
              characters. Imagine the joy as The Grinch, Batman, or a Halloween
              character mingles with your guests! Plus, our comprehensive party
              rentals aim to simplify your planning process. As a proud part of
              the Rhode Island community, we are committed to transforming your
              celebrations into unforgettable memories. Choose us, and together,
              lets create magic!
            </p>
            <div className="flex justify-center items-center py-4">
              <Button type="small" title="Our story ➧" />
            </div>
          </div>
          <div id="water slides and bounce houses">
            <div className="flex justify-center text-center items-center py-6">
              <Heading title="Water Slides &amp; Bounce Houses" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-6">
              {homeSlides.map((value) => (
                <div
                  className="relative"
                  key={value.id}
                  onMouseEnter={() => setShowSlidesData(value.id)}
                  onMouseLeave={() => setShowSlidesData(0)}
                >
                  <Link href={"/"}>
                    <Image
                      src={value.Image}
                      alt={value.alt}
                      className="bg-black object-cover overflow-hidden hover:opacity-60 hover:transition hover:ease-in-out hover:duration-300"
                    />
                  </Link>
                  {slidesData === value.id ? (
                    <>
                      <p className="absolute text-white font-semibold font-roboto text-2xl top-2 left-2">
                        {value.title}
                      </p>
                      <p className="absolute bottom-6 left-0 mb-2 ml-2 text-white text-sm font-roboto">
                        One day Rental: {value.oneDayRent}
                      </p>
                      <p className="absolute bottom-1 left-0 mb-2 ml-2 text-white text-sm font-roboto">
                        Two day Rental: {value.twoDayRent}
                      </p>
                      <p className="absolute bottom-1 right-3 mb-2 ml-2 text-[#FFCB05] text-sm font-roboto">
                        View more ➧
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div id="events">
            <div className="flex justify-center items-center py-6">
              <Heading title="Events We Cater To..." />
            </div>
            <div className="grid grid-cols-2 py-6">
              {events.map((value) => (
                <div
                  key={value.id}
                  className={`${value.id === 3 ? "col-span-2" : "col-span-1"}`}
                >
                  <Link
                    href={"/"}
                    className="relative"
                  >
                    <Image
                      src={value.Image}
                      alt={value.alt}
                      className='"bg-black object-cover overflow-hidden hover:opacity-70 hover:transition hover:ease-in-out hover:duration-300'
                    />
                      <>
                        <p className="absolute text-[#FFCB05] font-semibold font-roboto text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          {value.title} ➧
                        </p>
                      </>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div id="FAQ">
            <div className="flex justify-center items-center py-6">
              <Heading title="Have a question?" />
            </div>
            <div className="grid gap-y-2 pb-20">
              {accordion.map((value, index) => (
                <div key={value.id} onClick={() => handleAccordionClick(index)}>
                  <Accordion
                    active={index === activeAccordion}
                    question={value.question}
                    answer={value.answer}
                  />
                </div>
              ))}
            </div>
          </div>
          <div id="reviews">
            <div className="flex justify-center items-center">
              <h3 className="text-white text-2xl font-montserrat">Success</h3>
            </div>
            <div className="flex justify-center text-center items-center py-3">
              <Heading title="Don't just take our word for it..." />
            </div>
            <div className="flex h-52 justify-center items-center text-white">
              Google Reviews
            </div>
          </div>
          <div id="contactUs">
            <div className="flex justify-center items-center py-6">
              <Heading title="Get in touch..." />
            </div>
            <div className="flex justify-center items-center pb-6">
              <h3 className="text-white text-lg text-center md:text-2xl font-montserrat font-semibold">
                Fill out this form to inquire about out services!
              </h3>
            </div>
            <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
              <Card
                type="contact"
                icon={<FiPhone size={40} />}
                item={"Call Us"}
                contact={"401 - 206 - 6294"}
              />
              <Card
                type="contact"
                icon={<SlLocationPin size={40} />}
                item={"Location"}
                contact={"Rhone Island"}
              />
              <Card
                type="contact"
                icon={<MdEmail size={40} />}
                item={"Email"}
                contact={"info@osccpr.com"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <ClientLayout>{page}</ClientLayout>;
};

export default Home;
