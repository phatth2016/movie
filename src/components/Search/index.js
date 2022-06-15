import React, { useEffect, useState } from "react";
import { SeachStyled } from "./styled";
import { SearchOutlined } from "@ant-design/icons";
import useDebounce from "../../hooks/useDebounce";

export default function Search({ searchText, setSearchText }) {
  const [searchTextDebounce, setSearchTextDebounce] = useState(searchText);

  const debouncedSearchTerm = useDebounce(searchTextDebounce, 5000);

  useEffect(() => {
    setSearchText(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleChangeInput = (e) => {
    setSearchTextDebounce(e.target.value);
  };

  return (
    <SeachStyled>
      <input
        id="myInput"
        placeholder="search..."
        value={searchTextDebounce}
        onChange={handleChangeInput}
      />
      <SearchOutlined className="icon-search" />
    </SeachStyled>
  );
}
