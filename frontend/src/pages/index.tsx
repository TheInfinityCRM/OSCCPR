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
import { reviews } from "@data/reviews";
import Slider from "react-slick";
import Aos from "aos";
import "aos/dist/aos.css";

const Home: NextPageWithLayout = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [slidesData, setShowSlidesData] = React.useState<number>(0);
  const [activeAccordion, setActiveAccordion] = React.useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
                      ? "object-left"
                      : item.id === 5
                      ? "object-center"
                      : "object-right"
                  } md:"object-center"`}
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  data-aos="fade"
                >
                  <div
                    className="text-white font-bold font-montserrat text-3xl md:text-5xl w-auto text-center mb-6"
                    style={{ lineHeight: "4rem" }}
                  >
                    {item.tagline}
                  </div>
                  <Link href={item.href}>
                    <Button type="small" title="View more" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="bg-black">
        <div className="container">
          <div className="py-6 md:py-10" id="about">
            <div
              className="flex justify-center items-center py-6"
              data-aos="fade"
            >
              <Heading title="About Us" />
            </div>
            <p
              className="text-white font-montserrat leading-7 mx-6 py-6 text-justify"
              data-aos="fade"
            >
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
          </div>
          <div id="subheader" className="pb-28">
            <div
              className="flex justify-center items-center mt-28"
              data-aos="fade"
            >
              <h1 className="border-2 md:border-4 text-white text-justify rounded-md md:font-semibold px-4 md:px-8 py-3 md:py-6 text-2xl md:text-3xl lg:text-5xl font-montserrat">
                Serving RI and select parts of CT and MA
              </h1>
            </div>
          </div>
          <div id="Inflatables and More" className="py-6 md:py-10">
            <div
              className="flex justify-center text-center items-center py-6"
              data-aos="fade"
            >
              <Heading title="Inflatables &amp; More" />
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-3 py-6"
              data-aos="fade"
            >
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
                      className={`${
                        value.status === 2 ? "opacity-50" : ""
                      } bg-black object-cover overflow-hidden hover:opacity-40 hover:transition hover:ease-in-out hover:duration-300`}
                    />
                  </Link>
                  <>
                    {value.status === 2 && (
                      <h3
                        className={`absolute ${
                          slidesData === value.id ? "" : "block md:hidden"
                        } text-[#FFCB15] font-semibold font-roboto text-2xl inset-0 flex items-center justify-center`}
                      >
                        Sold Out
                      </h3>
                    )}
                    <p
                      className={`absolute ${
                        slidesData === value.id ? "" : "block md:hidden"
                      } text-white font-semibold font-roboto text-2xl top-2 left-2`}
                    >
                      {value.title}
                    </p>
                    {value.status === 1 && (
                      <>
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
                      </>
                    )}
                    {value.status === 1 && (
                      <p
                        className={`absolute ${
                          slidesData === value.id ? "" : "block md:hidden"
                        } bottom-1 right-3 2xl:right-32 mb-2 ml-2 text-[#FFCB05] text-sm font-roboto`}
                      >
                        View more ➧
                      </p>
                    )}
                  </>
                </div>
              ))}
            </div>
          </div>
          {/* <div id="events" className="py-6 md:py-10">
            <div className="flex justify-center items-center py-6" data-aos="fade">
              <Heading title="Events We Cater To..." />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-6" data-aos="fade">
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
          </div> */}
          <section id="faq" className="py-6 md:py-10">
            <div
              className="flex justify-center items-center py-6"
              data-aos="fade"
            >
              <Heading title="Have a question?" />
            </div>
            <div className="grid gap-y-2 pb-20" data-aos="fade">
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
          <div id="reviews" className="py-6 md:py-10">
            <div className="flex justify-center items-centers" data-aos="fade">
              <h3 className="text-white text-2xl font-montserrat italic font-semibold">
                Success
              </h3>
            </div>
            <div
              className="flex justify-center text-center items-center py-3"
              data-aos="fade"
            >
              <Heading title="Don't just take our word for it..." />
            </div>
            <div data-aos="fade">
              <Slider {...settings}>
                {reviews.map((value) => (
                  <div key={value.id}>
                    <Card
                      type={"review"}
                      review={value.review}
                      rating={value.rating}
                      reviewImg={value.reviewImg}
                      openModal={() => {
                        openModal(value.reviewImg);
                      }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <section id="contact" className="py-6 md:py-10">
            <div
              className="flex justify-center items-center py-6"
              data-aos="fade"
            >
              <Heading title="Get in touch..." />
            </div>
            <div className="flex justify-center items-center" data-aos="fade">
              <h3 className="text-white text-lg text-center md:text-2xl font-montserrat font-semibold">
                Fill out this form to inquire about out services!
              </h3>
            </div>
            <div
              className="py-2 flex justify-center items-center"
              data-aos="fade"
            >




              











              
            </div>
            <div
              className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6"
              data-aos="fade"
            >
              <Card
                type="contact"
                icon={<FiPhone size={40} />}
                item={"Call Us"}
                contact={"401 - 200 - 4423"}
              />
              <Card
                type="contact"
                icon={<SlLocationPin size={40} />}
                item={"Location"}
                contact={"Rhode Island"}
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
        <Modal isOpen={isModalOpen} scroll={false}>
          <div className="container" data-aos="fade">
            <div onClick={closeModal}>
              <p className="flex items-center font-montserrat text-sm cursor-pointer">
                <FiArrowLeft size={20} className="text-[#FFCB05]" /> GO BACK
              </p>
            </div>
            <div className="grid place-items-center">
              <Image src={title} alt={"Review Image"} />
            </div>
            {/* <div className="flex items-center justify-center my-3">
              <h2 className="text-2xl text-[#FFCB05] border-b-2 mb-6 border-[#FFCB05] font-bold font-montserrat">
                {title?.title}
              </h2>
            </div> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12">
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
            </div> */}
            {/* <div className="py-2 flex justify-center items-center">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/ai1gyJlD8zQcumUrRque"
                className="w-full h-[80vh] md:h-[50vh]  lg:h-[68vh]"
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
            </div> */}
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
