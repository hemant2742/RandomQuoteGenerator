import React from "react";
import { useState, useEffect } from "react";
import Header from "./header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Droppdown from "./dropdown";

const storedBookmarks = localStorage.getItem("bookmarked");
const bookmarked = storedBookmarks ? JSON.parse(storedBookmarks) : [];

function Card() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [setTags] = useState([]);
  const [selectedTag, setselectedTag] = useState([]);

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
  });

  let fetchNewQuote = () => {
    const filter = selectedTag.join("|");
    console.log(filter);
    fetch(`https://api.quotable.io/random?tags=${filter}`)
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setselectedTag(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.join(",") : value
    );
  };

  // console.log(selectedTagst);
  const handleBookmark = () => {
    bookmarked.push({ quote: quote, author: author });
    localStorage.setItem("bookmarked", JSON.stringify(bookmarked));

    toast.success("Quote has been bookmarked!", {
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <Header />
      <div className="px-5 py-28  flex h-screen  justify-center">
        <div className=" flex flex-wrap     ">
          <div className="p-4  md:w-full">
            <div className="flex  rounded-3xl p-3 sm:flex-row flex-col bg-[#D05252]">
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
              <div class="flex justify-center"></div>
              <div className=" p-2">
                <Droppdown
                  selectedTag={selectedTag}
                  handleChange={handleChange}
                />
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
      <ToastContainer />
    </>
  );
}

export { Card, bookmarked };
