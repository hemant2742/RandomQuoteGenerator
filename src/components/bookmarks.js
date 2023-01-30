import React from "react";

import { bookmarked } from "./cards";
import Header from "./header";
import EmptyBookmark from "./emptybookmark";

function Bookmark() {
  return (
    <>
      <Header />

      <div className="px-5 py-28  flex  h-screen  justify-center bg-gradient-to-r from-[#2E2282] to-[#5E2AB2]">
        {bookmarked.length > 0 ? (
          <div className=" flex flex-wrap    ">
            {bookmarked.map(({ quote, author }) => (
              <div className="p-6  md:w-full">
                <div className="flex  rounded-2xl p-8 sm:flex-row flex-col bg-[#D05252]">
                  <div className="flex-grow text-center text-white">
                    <h2 className="text-lg title-font font-medium mb-6">
                      {quote}
                    </h2>
                    <h3 className="text-lg title-font font-small mb-0">
                      -{author}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyBookmark />
        )}
      </div>
    </>
  );
}
export default Bookmark;
