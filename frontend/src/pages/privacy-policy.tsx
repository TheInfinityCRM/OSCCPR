import React from "react";
import Head from "next/head";
import ClientLayout from "@layouts/clientLayout/clientLayout";
import { NextPageWithLayout } from "@customTypes/layouts";

const Privacypolicy: NextPageWithLayout = () => {
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
              <i>Privacy Policy</i>
            </h3>
            <h1 className="text-[#FFCB05] text-3xl md:text-5xl font-semibold">
              PRIVACY POLICY - OSCCPR
            </h1>
          </div>
          <div className="grid grid-cols-1 text-white font-semibold  leading-loose text-justify">
            <div className="h-full w-full">
              <div>
                <h1>OSCCPR Privacy Policy</h1>
                <p>Last Updated: June 22, 2023</p>

                <p>
                  We are committed to maintaining the privacy and protection of
                  your personal data. This Privacy Policy explains how we
                  collect and use your personal information.
                </p>

                <p>
                  PLEASE READ THIS PRIVACY POLICY CAREFULLY. THE TERMS STATED IN
                  THIS PRIVACY POLICY CONSTITUTE A BINDING LEGAL AGREEMENT
                  BETWEEN YOU AND OSCCPR. BY USING THIS SITE AND THE RELATED
                  SERVICES, YOU UNCONDITIONALLY AGREE TO BE BOUND BY THE TERMS
                  STATED IN THIS PRIVACY POLICY, INCLUDING ALL EXCLUSIONS AND
                  LIMITATIONS OF LIABILITY, AND WARRANT THAT YOU HAVE FULL
                  AUTHORITY AND CAPACITY, LEGAL AND OTHERWISE, TO USE THE
                  SERVICES. YOU MAY NOT ACCESS OR USE THIS SITE OR THE SERVICES
                  IF YOU DO NOT AGREE TO ANY PART OF THESE TERMS. WE RESERVE THE
                  RIGHT TO PERIODICALLY MAKE UPDATES TO THIS PRIVACY POLICY AS
                  OUR PRACTICES CHANGE. YOUR CONTINUED USE OF THE SITE AFTER
                  SUCH CHANGES CONSTITUTES YOUR ACCEPTANCE OF THE CHANGES, SO
                  PLEASE CHECK BACK PERIODICALLY FOR UPDATES.
                </p>

                <h2>COLLECTION OF INFORMATION</h2>

                <p>
                  We may collect information such as name, address, email, phone
                  number, and payment information when you rent from us.
                </p>

                <p>
                  Additionally, as you browse the Site, we collect information
                  about the individual web pages or products that you view, what
                  websites or search terms referred you to the Site, and
                  information about how you interact with the Site. We refer to
                  this automatically-collected information as Device
                  Information.
                </p>

                <div>
                  <h2>USE OF INFORMATION</h2>

                  <p>
                    The information we collect is used to process your rentals,
                    manage your account, and, if you agree, send you promotional
                    information about our services we think you may find
                    interesting.
                  </p>
                </div>
                <div>
                  <h2>DATA SECURITY</h2>

                  <p>
                    We are committed to ensuring that your information is
                    secure. We have implemented appropriate physical,
                    electronic, and managerial procedures to safeguard and
                    secure the information we collect.
                  </p>

                  <h3>THIRD PARTY WEBSITES</h3>

                  <p>
                    Our website may contain links to other websites of interest.
                    However, once you have used these links to leave our site,
                    we do not have any control over that other website.
                  </p>

                  <h3>CHANGES TO PRIVACY POLICY</h3>

                  <p>
                    We may update our Privacy Policy from time to time. Any
                    changes will be posted on this page, so please review it
                    periodically.
                  </p>
                </div>

                <h2>CONTACT US</h2>

                <p>
                  For more information about our privacy practices, if you have
                  questions, or if you would like to make a complaint, please
                  contact us by e-mail at{"info@osccpr.com"}
                  <a href="mailto:privacy@example.com">info@osccpr.com</a>
                  {"info@osccpr.com"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Privacypolicy.getLayout = (page: React.ReactElement) => {
  return <ClientLayout>{page}</ClientLayout>;
};

export default Privacypolicy;
