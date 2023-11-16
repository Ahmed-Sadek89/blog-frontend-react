import { useSelector } from "react-redux";
import { rootState } from "../../Redux/store";
import { NavLink } from "react-router-dom";

const CategoryItems = () => {
  const { data } = useSelector((state: rootState) => state.categories_getAll);
  return (
    <>
      {data.result.map((index) => (
        <NavLink key={index.id} to={`category/${index.cat_name}`} >
          {index.cat_name}
        </NavLink>
      ))}
    </>
  );
};

export default CategoryItems;
