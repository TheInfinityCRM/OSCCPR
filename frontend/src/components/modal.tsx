import React from 'react';

type ModalProps = {
  isOpen: boolean;
  children:React.ReactNode;
  scroll:boolean
};

const Modal: React.FC<ModalProps> = ({ isOpen, children, scroll }) => {
  if (!isOpen) {
    return null;
  }



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`bg-black text-white w-full h-[80vh] lg:mx-16 ${scroll? "overflow-y-scroll":"overflow-y-none"} p-4`}>
        {children}
      </div>
    </div>

  );
};

export default Modal;
