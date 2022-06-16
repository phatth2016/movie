import React, { useEffect, useState } from "react";
import { SeachStyled } from "./styled";
import { SearchOutlined } from "@ant-design/icons";
import useDebounce from "../../hooks/useDebounce";

export default function Search({ searchText, setSearchText }) {
  const [searchTextDebounce, setSearchTextDebounce] = useState(searchText);
  const ref = React.useRef();
  const debouncedSearchTerm = useDebounce(searchTextDebounce, 1000);

  useEffect(() => {
    setSearchText(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleChangeInput = (e) => {
    setSearchTextDebounce(e.target.value);
  };

  const onFocus = () => {
    ref.current.focus();
  };

  return (
    <SeachStyled className={searchText ? "active" : ""}>
      <input
        id="myInput"
        placeholder="search..."
        value={searchTextDebounce}
        onChange={handleChangeInput}
        zoom={1}
        ref={ref}
      />
      <SearchOutlined className="icon-search" onClick={onFocus} />
    </SeachStyled>
  );
}
