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

const Costumes = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [activeAccordion, setActiveAccordion] = React.useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [title, setTitle] = React.useState({ id: 0, name: "" });

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
            <section id={value.href} key={value.id} className="my-24 lg:my-0">
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
                      <div onClick={() => openModal(value)} className="w-full">
                        <Button title={"Book Now"} type={"medium"} />
                      </div>
                      <Button title={"View Images"} type={"medium"} />
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
                      <div onClick={() => openModal(value)} className="w-full">
                        <Button title={"Book Now"} type={"medium"} />
                      </div>
                      <Button title={"View Images"} type={"medium"} />
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
        <Modal isOpen={isModalOpen}>
          <div onClick={closeModal}>
            <p className="flex items-center font-montserrat text-sm cursor-pointer">
              <FiArrowLeft size={20} className="text-[#FFCB05]" /> GO BACK
            </p>
          </div>
          {title?.name ? (
            <>
              <div className="flex items-center justify-center my-3">
                <h2 className="text-2xl text-[#FFCB05] border-b-2 mb-6 border-[#FFCB05] font-bold font-montserrat">
                  Contact {title?.name} Here!
                </h2>
              </div>
              <div className="py-2 flex justify-center items-center">
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
            <></>
          )}
        </Modal>
      </div>
    </>
  );
};

Costumes.getLayout = (page: React.ReactElement) => {
  return <ClientLayout>{page}</ClientLayout>;
};

export default Costumes;
