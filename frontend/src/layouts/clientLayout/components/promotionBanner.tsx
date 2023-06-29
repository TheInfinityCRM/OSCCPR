import { useState } from 'react';

const PromotionalBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const closeBanner = () => {
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) {
    return null;
  }

  return (
    <div className="bg-gray-700 fixed bottom-0 z-50 w-full text-white px-4 py-2 flex items-center justify-between text-justify text-sm">
      <p> Exclusive 10% discount for Police/fire, Doctor/RN, First responders, Military and Electric Boat employees.</p>
      <button
        className="text-white ml-2"
        onClick={closeBanner}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default PromotionalBanner;
