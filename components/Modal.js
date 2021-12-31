import { ClientSideRowModelSteps } from "ag-grid-community";

import React from "react";
import SimpleMap from "./SimpleMap";


export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button  data-tip data-for="openTip"
        className="bg-yellow-500 rounded-2xl border border-ring-bg-gray-200 ring-inset hover:bg-yellow-600 text-white active:red-600 font-bold uppercase sm:text- sm:px-10 lg:text-lg px-5 py-3 rounded-4lg :shadow-2xl hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Öffnungszeiten
      </button >
      
      
      {showModal ? (
        <>
          <div
            className="w-screen
            justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 border-md- z-50 outline-none focus:outline-none"
            on={() => setShowModal(false)}
          >
            <div className="w-full border-1 border-gray-100 relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="w-full bg-gray-900  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="w-full bg-yellow-500 flex items-start justify-between p-5 border-b border-solid border-yellow-200 rounded-t">
                  <h3 className="w-96 text-8xl text-center font-bold uppercase">
                    Googl Map
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="my-4 text-blueGray-500 text-3xl leading-relaxed sm:text-md">
                   <SimpleMap></SimpleMap>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-gray100 rounded-2xl border border-white font-bold hover:text-yellow-400 background-transparent hover:bg-gray-700 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  
        
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
