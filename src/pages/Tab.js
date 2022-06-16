import React from "react";
import { TabStyled } from "./styled";

export default function Tab({ tab, handleChangeTab }) {
  return (
    <TabStyled className="tab">
      <h1
        className={tab === "popular" ? "active" : ""}
        onClick={() => handleChangeTab("popular")}
      >
        Popular movies
      </h1>
      <h1
        className={tab === "now_playing" ? "active" : ""}
        onClick={() => handleChangeTab("now_playing")}
      >
        Now Playing
      </h1>
      <h1
        className={tab === "top_rated" ? "active" : ""}
        onClick={() => handleChangeTab("top_rated")}
      >
        Top Rated
      </h1>
    </TabStyled>
  );
}
