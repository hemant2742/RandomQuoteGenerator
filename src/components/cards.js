import React, { useState, useEffect } from "react";
import Header from "./header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Droppdown from "./dropdown";
import { ThreeDots } from "react-loader-spinner";

const storedBookmarks = localStorage.getItem("bookmarked");
const bookmarked = storedBookmarks ? JSON.parse(storedBookmarks) : [];

function Card() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = "	Di48rLh27TmpEr1iRwJRjIGvmVziKXYltATsimua"; 

  useEffect(() => {
    fetch(`http://quotes.rest/qod.json?apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const { quote, author } = data.contents.quotes[0];
        setQuote(quote);
        setAuthor(author);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  
  // ...
  
  useEffect(() => {
    fetch(`http://quotes.rest/quote/tags.json?apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setTags(data.tags);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  // ...
  
  let fetchNewQuote = () => {
    const filter = selectedTag.join(",");
    fetch(`http://quotes.rest/qod.json?category=${filter}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const { quote, author } = data.contents.quotes[0];
        setQuote(quote);
        setAuthor(author);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (event) => {
    setSelectedTag(event.target.value);
  };

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
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-wrap justify-center">
          <div className="p-4 md:w-full">
            {isLoading ? (
              <div className="flex flex-col justify-center items-center ">
                <p className="text-3xl font-bold text-white mb-2 ">Getting Quote...</p>
                <ThreeDots color="#D05252" height={80} width={80} />
              </div>
            ) : (
              <div className="flex rounded-3xl p-3 sm:flex-row flex-col bg-[#D05252]">
                <div className="flex-grow text-center text-white ">
                  <h2 className="text-lg title-font font-medium mb-6 text-center">
                    {quote}
                  </h2>
                  <h3 className="text-lg title-font font-small mb-0">
                    - {author}
                  </h3>
                  <div className="float-right">
                    <button onClick={handleBookmark}>
                      {/* Bookmark SVG here */}
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col items-center">
              <div className="flex justify-center"></div>
              <div className="p-2">
                <Droppdown
                  selectedTag={selectedTag}
                  handleChange={handleChange}
                  tags={tags}
                />
              </div>
              <button
                className="bg-green-500 hover:bg-green-800 Shadow-3xl text-white font-bold py-2 px-4 rounded-full justify-center"
                onClick={fetchNewQuote}
              >
                Next Quote
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export { Card, bookmarked };
