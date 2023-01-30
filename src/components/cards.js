import React from "react";
import { useState, useEffect } from "react";
import Header from "./header";
import swal from "sweetalert";

const bookmarked = [];

function Card() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  // http://api.quotable.io/random

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch("https://api.quotable.io/tags")
      .then((res) => res.json())
      .then((tag) => {
        setTags(tag);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let fetchNewQuote = () => {
    fetch(`https://api.quotable.io/random?tags=${selectedTag}`)
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(selectedTag);
  const handleBookmark = () => {
    bookmarked.push({ quote: quote, author: author });
    swal({
      title: "Great!",
      text: "Your Quote has been Bookmarked!",
      icon: "success",
      button: "OK!",
    });
  };
  return (
    <>
      <Header />
      <div className="px-5 py-28  flex h-screen  justify-center bg-gradient-to-r from-[#2E2282] to-[#5E2AB2]">
        <div className=" flex flex-wrap     ">
          <div className="p-4  md:w-full">
            <div className="flex  rounded-3xl p-8 sm:flex-row flex-col bg-[#D05252]">
              <div className="flex-grow text-center text-white  ">
                <h2 className="text-lg title-font font-medium mb-6 text-center">
                  {quote}
                </h2>
                <h3 className=" text-lg title-font font-small mb-0 ">
                  -{author}
                </h3>
                <div className="float-right">
                  <button onClick={handleBookmark}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      class="w-6 h-6 hover:fill-white"
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
            </div>

            <div className=" flex flex-col items-center">
              <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                  <select
                    class="form-select appearance-none
      block
      w-full
      mt-5
      px-3
      py-1
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    onChange={(e) => setSelectedTag(e.target.value)}
                  >
                    <option selected>Select tag to filter</option>

                    {tags.map((tag) => (
                      <option value={tag.name}>{tag.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                className="bg-green-500 hover:bg-green-800 Shadow-3xl text-white font-bold py-2 px-4  rounded-full  justify-center"
                onClick={fetchNewQuote}
              >
                Next Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Card, bookmarked };
