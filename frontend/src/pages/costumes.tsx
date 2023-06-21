import React from "react";
import ClientLayout from "@layouts/clientLayout/clientLayout";
import Head from "next/head";
import Image from "next/image";
import { costumes } from "@data/costumes";
import Heading from "@components/heading";
import ReactPaginate from "react-paginate";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Costumes = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 4;

  const costumeItems = costumes;

  const totalPages = Math.ceil(costumeItems.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = costumeItems.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }: any) => {
    setCurrentPage(selected);
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
            <div key={value.id} className="my-24 lg:my-0">
              {value.id % 2 == 0 ? (
                <div className="grid grid-cols-12 gap-4 place-items-center lg:h-screen 2xl:h-auto">
                  <div className="col-span-12 md:col-span-5 lg:col-span-4">
                    <Image src={value.image} alt={value.name} />
                  </div>
                  <div className="col-span-12 md:col-span-7 lg:col-span-8">
                    <Heading title={value.name} />
                    {value.data}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-12 gap-4 place-items-center lg:h-screen 2xl:h-auto">
                  <div className="col-span-12 md:col-span-7 lg:col-span-8">
                    <Heading title={value.name} />
                    {value.data}
                  </div>
                  <div className="col-span-12 md:col-span-5 lg:col-span-4">
                    <Image src={value.image} alt={value.name} />
                  </div>
                </div>
              )}
            </div>
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
    </>
  );
};

Costumes.getLayout = (page: React.ReactElement) => {
  return <ClientLayout>{page}</ClientLayout>;
};

export default Costumes;
