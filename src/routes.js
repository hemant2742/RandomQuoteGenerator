import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Bookmark from "./components/bookmarks";

export default function Baselayout() {
  return (
    <div>
      <Routes>
        <Route exact path={"/"} element={<Header />} />
        <Route exact path={"/home"} element={<Header />} />
        <Route exact path={"/bookmarks"} element={<Bookmark />} />
      </Routes>
    </div>
  );
}
