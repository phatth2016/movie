import React, { useRef, useState } from "react";
import { SeachStyled, SearchModal } from "./styled";
import { SearchOutlined } from "@ant-design/icons";
// import CardMusicHorizontal from "../CardMusicHorizontal";
import useClickOutside from "../../hooks/useClickOutside";

export default function Search() {
  const [text, setText] = useState("");
  const [isShowModal, setShowModal] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setShowModal(false));

  const handleChangeInput = (e) => {
    setText(e.target.value);
    setShowModal(true);
  };

  return (
    <SeachStyled>
      <input
        id="myInput"
        placeholder="Enter music...., author....."
        onChange={handleChangeInput}
      />
      <SearchOutlined className="icon-search" />
      {isShowModal && text && (
        <SearchModal ref={ref}>
          <div className="song group">
            <div className="group-name">Music</div>
            <div>
              {/* {[1, 2, 4, 5].map((song) => {
                return <CardMusicHorizontal />;
              })} */}
            </div>
          </div>
          <div className="author group">
            <div className="group-name">Author</div>
          </div>
        </SearchModal>
      )}
    </SeachStyled>
  );
}
