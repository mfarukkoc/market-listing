import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import XMark from "@/assets/svg/XMark.svg";
import { AnimatePresence, motion } from "framer-motion";
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
          onClick={onClose}
          initial={{
            opacity: 0,
            overflow: "hidden",
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <div
            className="w-[90vw] max-w-3xl rounded-md bg-white p-8"
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
        </motion.div>
      )}
    </AnimatePresence>
  );

  return isBrowser ? createPortal(modalContent, document.body) : null;
};

export default Modal;
