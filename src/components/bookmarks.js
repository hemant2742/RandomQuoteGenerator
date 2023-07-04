import React from "react";
import { bookmarked } from "./cards";
import Header from "./header";
import EmptyBookmark from "./emptybookmark";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Bookmark() {
  const handleUnbookmark = (index) => {
    bookmarked.splice(index, 1); 
    localStorage.setItem("bookmarked", JSON.stringify(bookmarked));
    toast.success("Quote has been Removed!", {
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      onClose: () => {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
     
    });
    
  };

  return (
    <>
      <Header />

      <div className="px-5 py-28 flex h-screen justify-center">
        {bookmarked.length > 0 ? (
          <div className="flex flex-wrap">
            {bookmarked.map(({ quote, author }, index) => (
              <div className="p-4 md:w-full" key={index}>
                <div className="relative rounded-3xl p-3 sm:flex-row flex-col bg-[#D05252]">
                  <div className="flex-grow text-center text-white">
                    <h2 className="text-lg title-font font-medium mb-6">
                      {quote}
                    </h2>
                    <h3 className="text-lg title-font font-small mb-0">
                      -{author}
                    </h3>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <button
                      onClick={() => handleUnbookmark(index)}
                      className="text-white border-0 py-1 px-2 focus:outline-none  rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyBookmark />
        )}
      </div>
      <ToastContainer/>
    </>
  );
}

export default Bookmark;
