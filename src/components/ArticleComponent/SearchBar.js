import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
      <div className="row text-center justify-content-between mt-4 mb-3">
        <div className="col-12 col-md-8 text-start">
          <h3>List Artikel</h3>
        </div>

        <div className="col-12 col-md-4 searchBar">
          <input
            className="search-bar-input form-control rounded-pill"
            type="text"
            placeholder="search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
        </div>
      </div>
  );
};

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  setKeyword: PropTypes.func.isRequired,
};

export default SearchBar;


