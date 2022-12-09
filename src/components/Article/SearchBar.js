import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from "prop-types";

const SearchBar = ({ search, onSearch }) => {
  const onSearchHandler = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div className="mt-lg-2 ms-lg-3">
      <div className="position-relative ">
        <input
          className="form-control rounded-pill"
          value={search}
          onChange={onSearchHandler}
          placeholder="Search"
        />
        <AiOutlineSearch
          className="position-absolute fs-5 p-1 rounded-circle bg-white"
          style={{ top: "5px", right: "5px", width: "30px", height: "30px" }}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
