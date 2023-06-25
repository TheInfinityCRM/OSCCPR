import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "@components/card";
import { rentalItems } from "@data/rentals";
import ClientLayout from "@layouts/clientLayout/clientLayout";
import Image, { StaticImageData } from "next/image";
import Head from "next/head";
import { AiOutlineClose } from "react-icons/ai";
import { FiArrowLeft, FiFilter } from "react-icons/fi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Modal from "@components/modal";
import Heading from "@components/heading";
import Aos from "aos";
import "aos/dist/aos.css";

const Rentals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [adultItems, setAdultItems] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState({
    price: "",
    withLed:"",
    bookingImg: "",
    name: "",
    detailUrl: "",
    dimensions: "",
    twoDayRental: "",
    weekendRental: "",
  });

  const itemsPerPage = 8;

  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const filteredItems = rentalItems
    .filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (
        val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.price.includes(searchTerm)
      ) {
        return val;
      }
    })
    .filter((item) => {
      if (adultItems) {
        return item.category === "Adult";
      } else {
        return item.category === "Normal";
      }
    });
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredItems.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }: any) => {
    setCurrentPage(selected);
  };

  const openModal = (data: any) => {
    setActiveItem(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Rentals</title>
        <meta
          name="description"
          content="Welcome to Ocean State Costume Characters and Party Rentals, your hub for extraordinary celebrations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="py-6 bg-black 2xl:h-screen pb-28">
        <div className="container text-white mt-24">
          <div className="grid grid-cols-12">
            <div className="col-span-12 xl:col-span-2">
              <button
                onClick={() => setAdultItems((prevState) => !prevState)}
                className={`border-2 rounded-md xl:my-6 ${
                  adultItems
                    ? "border-[#FFCB05] text-[#FFCB05]"
                    : "border-white text-white"
                } w-40 xl:ml-6 py-2  flex items-center justify-center`}
              >
                {adultItems ? (
                  <AiOutlineClose color="#FFCB05" size={18} />
                ) : (
                  <FiFilter color="#FFCB05" size={18} />
                )}
                18+ Rentals
              </button>
            </div>
            <div className="col-span-12 xl:col-span-10">
              <div className="text-2xl flex ml-auto mt-4 xl:my-6 mb-12">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-[#FFCB05]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="bg-[#151515] text-lg text-white rounded-md  block w-full pl-10 p-2 font-montserrat"
                      placeholder="Search"
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 pb-12" data-aos='fade'>
            {currentItems.map((item) => (
              <Card
                key={item.id}
                type="rental"
                rentalImg={item.image}
                rentalName={item.name}
                rentalPrice={item.price}
                rentalStatus={item.status}
                openModal={() => {
                  openModal(item);
                }}
              />
            ))}
          </div>
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
      <div>
        <Modal isOpen={isModalOpen} scroll={true}>
          <div className="container" data-aos='fade'>
          <div onClick={closeModal}>
            <p className="flex items-center font-montserrat text-sm cursor-pointer">
              <FiArrowLeft size={20} className="text-[#FFCB05]" /> GO BACK
            </p>
          </div>
          <div className="flex items-center justify-center my-3">
            <h2 className="text-2xl text-[#FFCB05] border-b-2 border-[#FFCB05] font-bold font-montserrat">
              {activeItem.name}
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <h3 className="font-bold text-lg">{activeItem?.dimensions}</h3>
          </div>
          <div className="grid grid-cols-12 gap-6 lg:relative">
            <div className="col-span-12 md:col-span-4">
              <div className="border-2 border-white lg:absolute  xl:left-44 lg:top-24 mt-4 lg:mt-0 rounded-lg px-4 py-4 w-full lg:w-80 text-center font-bold text-lg font-montserrat leading-loose">
                <p>One Day Rental: {activeItem.price}</p>
                {
                  activeItem?.withLed ? <p>With LED: {activeItem.withLed}</p> : <></>
                } 
                {activeItem.twoDayRental ? (
                  <p>Two Day Rental: {activeItem.twoDayRental}</p>
                ) : (
                  <></>
                )}
                {activeItem?.weekendRental ? (
                  <p>Weekend Rental: {activeItem?.weekendRental}</p>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {activeItem?.bookingImg ? (
              <div className="col-span-12 md:col-span-8 flex justify-end">
                <Image
                  src={activeItem?.bookingImg}
                  className=""
                  alt={activeItem.name}
                />
              </div>
            ) : (
              <i className="text-white">No data available! :-/</i>
            )}
          </div>
          {activeItem.detailUrl ? (
            <div className="flex items-center justify-center my-6">
              <Heading title={"Book Here!"} />
            </div>
          ) : (
            <i className="text-white">No data available! :-/</i>
          )}

          <div className="flex items-center justify-center mb-6">
            <iframe
              src={activeItem.detailUrl}
              className="w-full h-[570vh] md:h-[330vh] lg:h-[140vh] text-white border-none"
            ></iframe>
          </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

Rentals.getLayout = (page: React.ReactElement) => {
  return <ClientLayout>{page}</ClientLayout>;
};

export default Rentals;
