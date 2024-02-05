import React from "react";

function JoinModal(isModalOpen, showModal) {
  return (
    <div>
      <div>
        {showModal ? (
          <div className="container ">
            <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="container flex justify-center">
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,

                    padding: "20px",
                    borderRadius: "8px",
                  }}
                  className="relative w-auto my-6 mx-auto max-w-3xl  flex justify-center "
                >
                  {/*content*/}

                  <div className="p-3  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none rounded-lg">
                    {/* Head */}
                    <div className="relative">
                      <button
                        onClick={() => isModalOpen(false)}
                        className="absolute right-3"
                      >
                        x
                      </button>
                    </div>
                    <div className="container p-10">
                      <div className="mb-5 ">
                        <h1 className="fond-extrabold">join now</h1>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 mb-5">
                        {/* <div
                                className="border border-gray-400 rounded-lg items-center flex justify-center "
                                style={{
                                  backgroundColor: "rgba(193, 174, 151, 1)",
                                }}
                              >
                                <p className="p-2 text-white text-sm">09:20 PM </p>
                              </div> */}
                        <div className="w-250px h-300px"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default JoinModal;
