import { ICardProps } from "@customTypes/components";
import React from "react";
import Image from "next/image";
import placeholder from "@assets/imgs/logo.png";

const Card: React.FC<ICardProps> = ({
  type,
  icon,
  item,
  contact,
  rentalImg,
  rentalName,
  rentalPrice,
  rentalStatus,
  openModal,
  eventName,
  eventImg
}) => {
  const handleClick = () => {
    if (openModal) {
      openModal();
    }
  };

  return (
    <>
      {type === "contact" ? (
        <div className="w-full lg:w-72 h-60 border-2 border-white rounded-md flex justify-center items-center hover:bg-[#151515] transition duration-300">
          <div className="flex flex-col justify-center items-center py-4 px-4 space-y-2 text-white">
            <div>{icon}</div>
            <div className="text-xl font-semibold">{item}</div>
            <div className="text-sm">{contact}</div>
          </div>
        </div>
      ) : type === "rental" ? (
        <div className="w-full lg:w-72 h-auto">
          <div className="grid grid-cols-1 place-items-center gap-y-4 py-6 rounded-lg bg-gradient-to-b from-black to-gray-800">
            <div className="relative">
              <Image
                src={rentalImg || placeholder}
                alt={rentalName || "Rental"}
                className={`${
                  rentalStatus === "Sold Out" ? "opacity-25" : ""
                } w-full md:w-72 h-60 rounded-t-lg`}
              />
              {rentalStatus === "Sold Out" ? (
                <p className="absolute top-2 left-2 bg-black py-1 px-2 text-[#FFCB05] text-xs">
                  {rentalStatus}
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="text-white">
              <h3 className="text-lg font-montserrat font-bold">
                {rentalName}
              </h3>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-semibold">{rentalPrice}</h3>
            </div>
            <button
              onClick={handleClick}
              className={`w-52 h-10 font-roboto border-2 rounded-full text-white hover:text-[#FFCB05] hover:border-[#FFCB05]`}
            >
              More Info
            </button>
          </div>
        </div>
      ) : type === "events" ? (
        <div className="w-full lg:w-72 h-auto shadow-md shadow-[#FFCB05] rounded-lg">
          <div className="grid grid-cols-1 place-items-center gap-y-4 bg-gradient-to-b from-black to-gray-800">
            <div className="relative">
              <Image
                src={eventImg || placeholder}
                alt={rentalName || "Rental"}
                className={`w-full md:w-72 h-60 rounded-lg`}
              />
            </div>
            <div className="text-white py-4">
              <h3 className="text-lg font-montserrat font-bold">
                {eventName}
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Card;
