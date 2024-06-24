
import React from "react";
import ReactDom from "react-dom"


function Modal({ children, onClose }) {
  return ReactDom.createPortal(
    <>
      <div className="modal-backdrop " >
      {/* style={OVERLAY_STYLES} */}
        <div className="modal-content bg-foodDetails dark:bg-darkCard">
        {/* style={MODAL_STYLES} */}
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" style={{marginLeft:"95%",marginTop:"0px"}}
            onClick={onClose}>
            X
          </button>
          {children}
        </div>
        </div>
    </>,
    document.getElementById('cart-root')
  );
}

export default Modal;
