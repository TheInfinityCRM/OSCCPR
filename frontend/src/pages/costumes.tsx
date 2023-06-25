import React from "react";
import ClientLayout from "@layouts/clientLayout/clientLayout";
import Head from "next/head";
import Image from "next/image";
import { costumes } from "@data/costumes";
import Heading from "@components/heading";
import ReactPaginate from "react-paginate";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Button from "@components/button";
import Accordion from "@components/accordion";
import Modal from "@components/modal";
import { FiArrowLeft } from "react-icons/fi";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const Costumes = () => {
  var settings = {
    dots: false,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    centerMode: true,
    variableWidth: true,
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
  const slider = React.useRef<Slider | null>(null);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [activeAccordion, setActiveAccordion] = React.useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [title, setTitle] = React.useState({
    id: 0,
    name: "",
    imgs: [{ id: 0, img: "" }],
  });
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
 


  const handleAccordionClick = (index: boolean) => {
    setActiveAccordion((prev) => !prev);
  };
  const itemsPerPage = 5;

  const costumeItems = costumes;

  const totalPages = Math.ceil(costumeItems.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = costumeItems.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }: any) => {
    setCurrentPage(selected);
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
        <title>Characters</title>
        <meta
          name="description"
          content="Welcome to Ocean State Costume Characters and Party Rentals, your hub for extraordinary celebrations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="py-6 bg-black">
        <div className="container text-white">
          {currentItems.map((value) => (
            <section id={value.href} key={value.id} className="my-24 lg:my-0" data-aos="fade">
              {value.id % 2 == 0 ? (
                <div className="grid grid-cols-12 gap-4 place-items-center lg:h-screen 2xl:h-auto">
                  <div className="hidden md:block col-span-12 md:col-span-5 lg:col-span-4">
                    <Image src={value.image} alt={value.name} />
                  </div>
                  <div className="col-span-12 md:col-span-7 lg:col-span-8">
                    <Heading title={value.name} />
                    <div className="block md:hidden col-span-12 md:col-span-5 lg:col-span-4">
                      <Image src={value.image} alt={value.name} />
                    </div>
                    <div
                      className="block md:hidden mt-4"
                      onClick={() => handleAccordionClick(true)}
                    >
                      <Accordion
                        active={activeAccordion}
                        question={"Details"}
                        answer={value.data}
                      />
                    </div>
                    <div className="hidden md:block">{value.data}</div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4 pt-6">
                      <div
                        onClick={() => {
                          openModal(value);
                          setActive(0);
                        }}
                        className="w-full"
                      >
                        <Button title={"Book Now"} type={"medium"} />
                      </div>
                      <div
                        onClick={() => {
                          openModal(value);
                          setActive(1);
                        }}
                        className="w-full"
                      >
                        <Button title={"View Images"} type={"medium"} />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-12 gap-4 place-items-center lg:h-screen 2xl:h-auto">
                  <div className="col-span-12 md:col-span-7 lg:col-span-8">
                    <Heading title={value.name} />
                    <div className="block md:hidden col-span-12 md:col-span-5 lg:col-span-4">
                      <Image src={value.image} alt={value.name} />
                    </div>
                    <div
                      className="block md:hidden mt-4"
                      onClick={() => handleAccordionClick(true)}
                    >
                      <Accordion
                        active={activeAccordion}
                        question={"Details"}
                        answer={value.data}
                      />
                    </div>
                    <div className="hidden md:block">{value.data}</div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4 pt-6">
                      <div
                        onClick={() => {
                          openModal(value);
                          setActive(0);
                        }}
                        className="w-full"
                      >
                        <Button title={"Book Now"} type={"medium"} />
                      </div>
                      <div
                        onClick={() => {
                          openModal(value);
                          setActive(1);
                        }}
                        className="w-full"
                      >
                        <Button title={"View Images"} type={"medium"} />
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block col-span-12 md:col-span-5 lg:col-span-4">
                    <Image src={value.image} alt={value.name} />
                  </div>
                </div>
              )}
            </section>
          ))}
          <div>
            <ReactPaginate
              previousLabel={<IoIosArrowBack />}
              nextLabel={<IoIosArrowForward />}
              breakLabel={"..."}
              previousLinkClassName={"pagination-previous"}
              nextLinkClassName={"pagination-next"}
              breakClassName={"break-me"}
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
      <div>
        <Modal isOpen={isModalOpen} scroll={false}>
          <div className="container" data-aos="fade">
          <div onClick={closeModal}>
            <p className="flex items-center font-montserrat text-sm cursor-pointer mb-4">
              <FiArrowLeft size={20} className="text-[#FFCB05]" /> GO BACK
            </p>
          </div>
          {active === 0 ? (
            <>
              <div className="flex items-center justify-center my-3">
                <h2 className="text-xl md:text-2xl text-[#FFCB05] border-b-2 mb-0 md:mb-6 border-[#FFCB05] font-bold font-montserrat">
                  Contact {title?.name} Here!
                </h2>
              </div>
              <div className="py-0 md:py-2 flex justify-center items-center">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/ai1gyJlD8zQcumUrRque"
                  className="w-full h-[120vh] md:h-[60vh]  lg:h-screen"
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
            </>
          ) : (
            <div className="relative">
              <Slider {...settings} ref={slider}>
                {title.imgs?.map((value) => (
                  <div key={value.id} className="px-6">
                    <Image
                      src={value.img}
                      alt={"Gallery Picture"}
                      className="w-72"
                    />
                  </div>
                ))}
              </Slider>
              <div className="hidden lg:block absolute top-1/2 left-0">
                  <button
                    className={`text-[#FFCB15] my-4 py-4 px-8 font-bold`}
                    onClick={() => slider?.current?.slickPrev()}
                  >
                    <AiOutlineLeft size={32} />
                  </button>
                </div>
                <div className="hidden lg:block absolute top-1/2 right-0">
                  <button
                    className={`text-[#FFCB15] my-4 py-4 px-8 font-bold`}
                    onClick={() => slider?.current?.slickNext()}
                  >
                    <AiOutlineRight size={32} />
                  </button>
                </div>
            </div>
          )}
          </div>
        </Modal>
      </div>
    </>
  );
};

Costumes.getLayout = (page: React.ReactElement) => {
  return <ClientLayout>{page}</ClientLayout>;
};

export default Costumes;
