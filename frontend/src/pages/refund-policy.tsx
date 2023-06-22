import React from "react";
import Head from "next/head";
import ClientLayout from "@layouts/clientLayout/clientLayout";
import { NextPageWithLayout } from "@customTypes/layouts";

const Refundpolicy: NextPageWithLayout = () => {
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
      <div className="bg-black">
        <div className="container">
          <div className="flex flex-col justify-center items-center text-center pt-32 pb-20">
            <h3 className="text-white text-3xl mb-6">
              <i>Refund Policy</i>
            </h3>
            <h1 className="text-[#FFCB05] text-3xl md:text-5xl font-semibold">
              REFUND POLICY - OSCCPR
            </h1>
          </div>
          <div className="grid grid-cols-1 text-white font-semibold  leading-loose text-justify">
            <div className="h-full w-full">
              <div>
                <h1>OSCCPR Refund Policy</h1>
                <p>Last Updated: June 22, 2023</p>

                <p>
                  We understand that plans can change, and we strive to accommodate our customers as best we can. Our refund policy is as follows:
                </p>

               

                <h2>CANCELLATION</h2>

                <p>
                  If you cancel your reservation at least 7 days prior to your event, you will receive a full refund.
                </p>

              </div>
              <div>
                <h2>BAD WEATHER</h2>

                <p>
                  If your event is cancelled due to bad weather, we will do our best to reschedule. If rescheduling is not possible, a full refund will be provided.
                </p>

               

              </div>
              <div>
                <h2>DAMAGE TO EQUIPMENT</h2>

                <p>If any equipment is damaged due to misuse or negligence on the part of the renter, the renter will be held responsible for the cost of repair or replacement.</p>

               


                <h3>REFUND METHOD</h3>
               <p>
                  Refunds will be processed to the original method of payment within a certain number of days, depending on your card issuer's policies.
                </p>

              </div>
              <div>
                <h2>NON-REFUNDABLE</h2>

                <p>
                  Please note that delivery fees and special service charges are non-refundable.
                </p>

                <h2>REFUND REQUESTS</h2>

                <p>
                  To request a refund, please contact us at our customer service email or phone number. Provide your name, contact information, and the reason for your request.
                </p>

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Refundpolicy.getLayout = (page: React.ReactElement) => {
  return <ClientLayout>{page}</ClientLayout>;
};

export default Refundpolicy;
