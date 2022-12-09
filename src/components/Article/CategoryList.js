import React from "react";
import PropTypes from "prop-types";
import { categories } from "../Location/categories";
import { AiOutlinePaperClip } from "react-icons/ai";
import "./article.css";

const CategoryList = ({ onCategory }) => {
  const onCategoryHandler = (e) => {
    onCategory(e.target.id);
  };

  return (
    <>
      <div className="d-flex justify-content-evenly border border-3 border-start-0 border-end-0 py-2">
        <button className="p-0 border-0 bg-white" onClick={onCategoryHandler}>
          <AiOutlinePaperClip
            className="rounded rounded-circle bg-success p-1 icon_category"
            id="all"
            title="all"
          />
        </button>
        {categories.map((category) => (
          <button
            key={category.value}
            className="p-0 border-0 bg-white scale"
            onClick={onCategoryHandler}
            title={category.value}
          >
            <img
              src={`/assets/icon-trash/${category.value}.png`}
              className="rounded rounded-circle bg-success p-1 icon_category"
              alt={category.value}
              id={category.value}
            />
          </button>
        ))}
      </div>
    </>
  );
};

CategoryList.propTypes = {
  onCategory: PropTypes.func.isRequired,
};

export default CategoryList;
