import React from "react";
import "../../style.css";
import "../../index.css";

function box({ Title, Num, Discription, Img, Details, icon }) {
  return (
    <>
      <div className="container my-24 mx-auto md:px-6">
        <div className="mb-32">
          <div className="block rounded-lg bg-primary">
            <div className="flex flex-wrap items-center">
              <div className="block w-full lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  src={Img}
                  alt=""
                  className="w-full h-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div className="w-full  lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-6 pb-2 text-3xl font-bold text-secondary">
                    {Title}
                  </h2>
                  <h5 className="mb-6 pb-2  font-bold text-black">
                    <span className="text-gray">RERA Number : </span>
                    {Num}
                  </h5>
                  <p className="mb-6 pb-2 text-gray">{Discription}</p>
                  <div className="grid gap-x-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                    <div className="mb-6 flex items-center text-gray">
                      <span className="text-third text-center h-5 w-4 mr-2">
                        {icon}
                      </span>
                      <span className="text-center">{Details}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default box;
