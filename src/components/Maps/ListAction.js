import React from "react";
import { Dropdown } from "react-bootstrap";
import { categories } from "../Location/categories";
import { AiOutlinePaperClip } from "react-icons/ai";

const ListAction = ({ selectCategory }) => {
  const onCategoryHandler = (e) => {
    return selectCategory(e.target.innerText.toLowerCase());
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          className="rounded-start text-white rounded-0"
        ></Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <span onClick={onCategoryHandler}>
              <AiOutlinePaperClip className="fs-5" />
              All
            </span>
          </Dropdown.Item>
          {categories.map((category) => (
            <Dropdown.Item key={category.label}>
              <img
                src={`/assets/icon-trash/${category.value}.png`}
                alt={category.value}
                style={{ width: "18px", height: "18px" }}
                className="me-1"
              />
              <span onClick={onCategoryHandler} className="text-capitalize">
                {category.value}
              </span>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default ListAction;
