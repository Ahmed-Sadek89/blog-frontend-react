import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../Redux/store";
import { postPayload } from "../../Types/posts";

type props = {
  categoryId: number| undefined;
  setCategoryId: React.Dispatch<React.SetStateAction<postPayload>>;
};

const CategoriesBtn = ({ categoryId, setCategoryId }: props) => {
  const categories_getAll_state = useSelector(
    (state: rootState) => state.categories_getAll
  );

  return (
    <>
      {categories_getAll_state?.data.result?.map((index) => (
        <div className="form-post-right-side-category-btn" key={index.id}>
          <input
            checked={categoryId === index.id ? true : false}
            type="radio"
            name="categoryId"
            value={index.id}
            onChange={(e) => {
              setCategoryId(prev => {
                return  {
                  ...prev,
                  category_id: parseInt(e.target.value)
                }
              });
            }}
          />
          <span>{index.cat_name}</span>
        </div>
      ))}
    </>
  );
};

export default CategoriesBtn;
