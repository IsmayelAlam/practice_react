import ReactDom from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);
  return ReactDom.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white ">
        <div className="flex flex-col justify-between items-end h-full">
          {children}
        </div>
      </div>
    </div>,
    document.querySelector(".modal")
  );
}

export default Modal;
