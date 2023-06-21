import React from 'react';

type ModalProps = {
  isOpen: boolean;
  children:React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 mt-12">
      <div className="bg-black text-white w-full h-[80vh] lg:mx-16 overflow-y-scroll p-4">
        {children}
      </div>
    </div>

  );
};

export default Modal;
