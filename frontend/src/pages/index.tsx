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
import { eventDetail, events } from "@data/events";
import Accordion from "@components/accordion";
import { faqs } from "@data/faqs";
import Card from "@components/card";
import { FiArrowLeft, FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import { carouselItems } from "@data/carousel";
import Modal from "@components/modal";

const Home: NextPageWithLayout = () => {
  const [slidesData, setShowSlidesData] = React.useState<number>(0);
  const [activeAccordion, setActiveAccordion] = React.useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [title, setTitle] = React.useState({ id: 0, title: "" });

  const handleAccordionClick = (index: number) => {
    if (index === activeAccordion) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };
  const openModal = (value: any) => {
    setTitle(value);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Welcome to Ocean State Costume Characters and Party Rentals, your hub for extraordinary celebrations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
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
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50}
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
            <p className="text-white font-montserrat leading-7 mx-6 py-6 text-justify">
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
                  <Link href={"/rentals"}>
                    <Image
                      src={value.Image}
                      alt={value.alt}
                      className="bg-black object-cover overflow-hidden hover:opacity-40 hover:transition hover:ease-in-out hover:duration-300"
                    />
                  </Link>
                  <>
                    <p
                      className={`absolute ${
                        slidesData === value.id ? "" : "block md:hidden"
                      } text-white font-semibold font-roboto text-2xl top-2 left-2`}
                    >
                      {value.title}
                    </p>
                    <p
                      className={`absolute ${
                        slidesData === value.id ? "" : "block md:hidden"
                      } bottom-6 left-0 mb-2 ml-2 text-white text-sm font-roboto`}
                    >
                      One day Rental: {value.oneDayRent}
                    </p>
                    <p
                      className={`absolute ${
                        slidesData === value.id ? "" : "block md:hidden"
                      } bottom-1 left-0 mb-2 ml-2 text-white text-sm font-roboto`}
                    >
                      Two day Rental: {value.twoDayRent}
                    </p>
                    <p
                      className={`absolute ${
                        slidesData === value.id ? "" : "block md:hidden"
                      } bottom-1 right-3 mb-2 ml-2 text-[#FFCB05] text-sm font-roboto`}
                    >
                      View more ➧
                    </p>
                  </>
                </div>
              ))}
            </div>
          </div>
          <div id="events">
            <div className="flex justify-center items-center py-6">
              <Heading title="Events We Cater To..." />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-6">
              {events.map((value) => (
                <div
                  key={value.id}
                  className={` relative ${
                    value.id === 3 ? "col-span-1 md:col-span-2" : "col-span-1"
                  }`}
                >
                  <div onClick={() => openModal(value)}>
                    <Image
                      src={value.Image}
                      alt={value.alt}
                      className="bg-black object-cover h-80 overflow-hidden opacity-70  hover:transition hover:ease-in-out hover:duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center hover:transform hover:-translate-y-3 hover:transition hover:ease-in-out hover:delay-150">
                      <p className="text-[#FFCB05] font-semibold font-roboto  text-2xl">
                        {value.title} ➧
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section id="faq">
            <div className="flex justify-center items-center py-6">
              <Heading title="Have a question?" />
            </div>
            <div className="grid gap-y-2 pb-20">
              {faqs.map((value, index) => (
                <div key={value.id} onClick={() => handleAccordionClick(index)}>
                  <Accordion
                    active={index === activeAccordion}
                    question={value.question}
                    answer={value.answer}
                  />
                </div>
              ))}
            </div>
          </section>
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
          <section id="contact">
            <div className="flex justify-center items-center py-6">
              <Heading title="Get in touch..." />
            </div>
            <div className="flex justify-center items-center">
              <h3 className="text-white text-lg text-center md:text-2xl font-montserrat font-semibold">
                Fill out this form to inquire about out services!
              </h3>
            </div>
            <div className="py-2 flex justify-center items-center">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/ai1gyJlD8zQcumUrRque"
                className="w-[100vh] h-[120vh] text-white"
                id="inline-ai1gyJlD8zQcumUrRque"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Form"
                data-height="567"
                data-layout-iframe-id="inline-ai1gyJlD8zQcumUrRque"
                data-form-id="ai1gyJlD8zQcumUrRque"
                title="Contact Form"
              ></iframe>
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
          </section>
        </div>
      </div>
      <div>
        <Modal isOpen={isModalOpen}>
          <div onClick={closeModal}>
            <p className="flex items-center font-montserrat text-sm cursor-pointer">
              <FiArrowLeft size={20} className="text-[#FFCB05]" /> GO BACK
            </p>
          </div>
          <div className="flex items-center justify-center my-3">
            <h2 className="text-2xl text-[#FFCB05] border-b-2 mb-6 border-[#FFCB05] font-bold font-montserrat">
              {title?.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12">
            {eventDetail
              .filter((val) =>
                title.title === "All Events"
                  ? val
                  : val.category === title.title
              )
              .map((value) => (
                <div key={value.id}>
                  <Card
                    type={"events"}
                    eventName={value.name}
                    eventImg={value.image}
                  />
                </div>
              ))}
          </div>
          <div className="py-2 flex justify-center items-center">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/ai1gyJlD8zQcumUrRque"
                className="w-[100vh] h-[120vh] xl:h-[128vh] text-white"
                id="inline-ai1gyJlD8zQcumUrRque"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Form"
                data-height="567" 
                data-layout-iframe-id="inline-ai1gyJlD8zQcumUrRque"
                data-form-id="ai1gyJlD8zQcumUrRque"
                title="Contact Form"
              ></iframe>
            </div>
        </Modal>
      </div>
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <ClientLayout>{page}</ClientLayout>;
};

export default Home;
