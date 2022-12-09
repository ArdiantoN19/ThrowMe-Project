import React from "react";
import PropTypes, { object } from "prop-types";

const SelectCategories = ({ onCategoryChange, category, categories }) => {
  return (
    <>
      <label htmlFor="selectCategory" className="col-form-label required-field">
        Category
      </label>
      <select
        className="form-select"
        aria-label="Select category"
        id="selectCategory"
        onChange={onCategoryChange}
        value={category}
      >
        {categories.map((category, index) => (
          <option
            value={category.value}
            key={index}
            style={{ fontSize: ".8em" }}
          >
            {category.label}
          </option>
        ))}
      </select>
    </>
  );
};

SelectCategories.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(object).isRequired,
};

export default SelectCategories;
