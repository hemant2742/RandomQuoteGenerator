import React from "react";
import { bookmarked } from "./cards";

function Bookmark() {
  return (
    <>
      <div className="px-5 py-32  flex  justify-center bg-blue-800">
        <div className=" flex flex-wrap   bg-blue-800  ">
          {bookmarked.map(({ quote, author }) => (
            <div className="p-4  md:w-full">
              <div className="flex border-4 rounded-lg border-gray-400 border-opacity-50 p-8 sm:flex-row flex-col bg-red-500">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-6">
                    {quote}
                  </h2>
                  <h3 className="text-black text-lg title-font font-small mb-6">
                    -{author}-
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Bookmark;
