import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../Redux/store";

type props = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  handleChange: (state: string, setState: React.Dispatch<string>) => void;
  
};

const CategoriesBtn = ({ category, setCategory, handleChange }: props) => {
  const categories_getAll_state = useSelector(
    (state: rootState) => state.categories_getAll
  );

  return (
    <>
      {categories_getAll_state?.data.result?.map((index) => (
        <div className="form-post-right-side-category-btn" key={index.id}>
          <input
            checked={category === index.cat_name ? true : false}
            type="radio"
            name="category"
            value={category}
            onChange={() => handleChange(index.cat_name, setCategory)}
          />
          <span>{index.cat_name}</span>
        </div>
      ))}
    </>
  );
};

export default CategoriesBtn;
