import React from "react";
import { useState, useEffect } from "react";

const bookmarked = [];

function Card() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // http://api.quotable.io/random

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);

  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  };

  const handleBookmark = () => {
    bookmarked.push({ quote: quote, author: author });
  };

  return (
    <>
      <div className="px-5 py-28  flex  justify-center bg-blue-800">
        <div className=" flex flex-wrap   bg-blue-800  ">
          <div className="p-4  md:w-full">
            <div className="flex border-4 rounded-lg border-gray-400 border-opacity-50 p-8 sm:flex-row flex-col bg-red-500">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-6">
                  {quote}
                </h2>
                <h3 className="text-black text-lg title-font font-small mb-6">
                  -{author}-
                </h3>
                <button onClick={handleBookmark}>
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
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button
              className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 my-12 rounded-full  justify-center"
              onClick={fetchNewQuote}
            >
              Generate New Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Card, bookmarked };
