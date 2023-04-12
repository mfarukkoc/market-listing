import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import XMark from "@/assets/svg/XMark.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const modalContent = (
    <div
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="w-[60vw] rounded-md bg-white p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex">
          {title}
          <button onClick={onClose} className="ml-auto text-gray-600">
            <XMark />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );

  return isBrowser && isOpen ? createPortal(modalContent, document.body) : null;
};

export default Modal;
