import React from "react";
import { Route, Routes } from "react-router-dom";
import Bookmark from "./components/bookmarks";
import OpenInWhatsapp from "./components/whatsappopen";
import { Card } from "./components/cards";

export default function Baselayout() {
  return (
    <div>
      <Routes>
        <Route exact path={"/"} element={<Card />} />
        <Route exact path={"/home"} element={<Card />} />
        <Route exact path={"/bookmarks"} element={<Bookmark />} />
        <Route exact path={"/open_in_whatsapp"} element={<OpenInWhatsapp />} />
      </Routes>
    </div>
  );
}
