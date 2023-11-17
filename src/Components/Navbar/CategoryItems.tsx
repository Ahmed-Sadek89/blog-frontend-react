import { useSelector } from "react-redux";
import { rootState } from "../../Redux/store";
import { NavLink } from "react-router-dom";

type props = {
  setToggleNavbar: React.Dispatch<React.SetStateAction<boolean>>
}
const CategoryItems = ({setToggleNavbar}: props) => {
  const { data } = useSelector((state: rootState) => state.categories_getAll);
  return (
    <>
      {data.result.map((index) => (
        <NavLink key={index.id} to={`category/${index.cat_name}`}  onClick={() => setToggleNavbar(prev => !prev)}>
          {index.cat_name} 
        </NavLink>
      ))}
    </>
  );
};

export default CategoryItems;
