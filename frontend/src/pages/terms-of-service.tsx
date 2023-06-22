import React from "react";
import Head from "next/head";
import ClientLayout from "@layouts/clientLayout/clientLayout";
import { NextPageWithLayout } from "@customTypes/layouts";

const Tos: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Terms of Service</title>
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
              <i>Terms of Service</i>
            </h3>
            <h1 className="text-[#FFCB05] text-3xl md:text-5xl font-semibold">
              TERMS OF SERVICE - OSCCPR
            </h1>
          </div>
          <div className="grid grid-cols-1 text-white font-semibold  leading-loose text-justify">
            <div className="h-full w-full">
              <div className="mb-4">
                <h2>TERMS OF SERVICE</h2>
                <p>
                  Welcome to the Ocean State Costume Characters and Party
                  Rentals (OSCCPR). The following Terms of Service (TOS) apply
                  when you use our services.
                </p>
                <p>
                  By visiting our site and/or purchasing something from us, you
                  engage in our “Service” and agree to be bound by the following
                  terms and conditions (“Terms of Service”, “Terms”), including
                  those additional terms and conditions and policies referenced
                  herein and/or available by hyperlink. These Terms of Service
                  apply to all users of the site, including without limitation
                  users who are browsers, vendors, customers, merchants, and/or
                  contributors of content.
                </p>
                <p>
                  Please read these Terms of Service carefully before accessing
                  or using our website. By accessing or using any part of the
                  site, you agree to be bound by these Terms of Service. If you
                  do not agree to all the terms and conditions of this
                  agreement, then you may not access the website or use any
                  services. If these Terms of Service are considered an offer,
                  acceptance is expressly limited to these Terms of Service.
                </p>
                <p>
                  Any new features or tools which are added to the current store
                  shall also be subject to the Terms of Service. You can review
                  the most current version of the Terms of Service at any time
                  on this page. We reserve the right to update, change or
                  replace any part of these Terms of Service by posting updates
                  and/or changes to our website. It is your responsibility to
                  check this page periodically for changes. Your continued use
                  of or access to the website following the posting of any
                  changes constitutes acceptance of those changes.
                </p>
                <p>We do not hold any payment information in our systems.</p>
              </div>

              <div className="mb-4">
                <h2>ACCEPTANCE OF TERMS</h2>
                <p>
                  By using our services, you agree to be bound by these terms
                  and all applicable laws and regulations. If you do not agree
                  with any of these terms, you are prohibited from using or
                  accessing our services.
                </p>
              </div>

              <div className="mb-4">
                <h2>SERVICES</h2>
                <p>
                  We reserve the right to refuse service to anyone for any
                  reason at any time.
                </p>
                <p>
                  OSCCPR provides costume character rentals and party rentals,
                  including inflatables, bounce houses, water slides, dry
                  slides, obstacle courses, and combo units. Services are
                  provided in a safe and efficient manner.
                </p>
                <p>
                  You agree not to reproduce, duplicate, copy, sell, resell or
                  exploit any portion of the Service, use of the Service, or
                  access to the Service or any contact on the website through
                  which the service is provided, without express written
                  permission by us.
                </p>
                <p>
                  The headings used in this agreement are included for
                  convenience only and will not limit or otherwise affect these
                  Terms.
                </p>
              </div>

              <div className="mb-4">
                <h2>USE OF SERVICES</h2>
                <p>
                  You must ensure that the services are used in a safe manner,
                  and in accordance with any instructions provided. You
                  acknowledge that you are responsible for determining your
                  ability and skills required for our activities. You should
                  consult a physician before undertaking any activity if you are
                  pregnant, suffer from a medical condition, take medication,
                  smoke, have a family history of coronary disease, or have
                  recently suffered an illness, injury, or impairment
                </p>
                <p>
                  This site may contain certain historical information.
                  Historical information, necessarily, is not current and is
                  provided for your reference only. We reserve the right to
                  modify the contents of this site at any time, but we have no
                  obligation to update any information on our site. You agree
                  that it is your responsibility to monitor changes to our site.
                </p>
              </div>
              <div className="mb-4">
                <h2>LIABILITY</h2>
                <p>
                  You acknowledge that there is an inherent risk in
                  participating in activities supplied by OSCCPR. By agreeing to
                  these terms, you voluntarily assume all risks and liabilities
                  arising from the use, condition and possession of any
                  equipment or services from OSCCPR.
                </p>
                <p>
                  We reserve the right at any time to modify or discontinue the
                  Service (or any part or content thereof) without notice at any
                  time.
                </p>
                <p>
                  We shall not be liable to you or to any third-party for any
                  modification, price change, suspension or discontinuance of
                  the Service.
                </p>
              </div>

              <div className="mb-4">
                <h2>MODIFICATION OF SERVICES</h2>
                <p>
                  We reserve the right to modify or discontinue, temporarily or
                  permanently, any of our services with or without notice.
                </p>
              </div>

              <div className="mb-4">
                <h2>TERMINATION</h2>
                <p>
                  We may terminate or suspend your access to our services
                  without prior notice or liability, for any reason whatsoever,
                  including but not limited to a breach of the TOS.
                </p>
              </div>
              <div className="mb-4">
                <h2>GOVERNING LAW</h2>
                <p>
                  These terms shall be governed and construed in accordance with
                  the laws of Rhode Island, United States, without regard to its
                  conflict of law provisions.
                </p>
              </div>

              <div className="mb-4">
                <h2>CONTACT INFORMATION</h2>
                <p>
                  Questions about the Terms of Service should be sent to us at
                  {"info@osccpr.com"}
                  <a href="mailto: [email protected]">[email protected]</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Tos.getLayout = (page: React.ReactElement) => {
  return <ClientLayout>{page}</ClientLayout>;
};

export default Tos;
