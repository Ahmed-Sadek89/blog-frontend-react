import { useSelector } from "react-redux";
import { rootState } from "../../Redux/store";
import { useNavigate } from "react-router-dom";

const CategoryItems = () => {
    const { data } = useSelector((state: rootState) => state.categories_getAll);
  const navigate = useNavigate();
  const goToCategory = (catName: string) => {
    navigate(`category/${catName}`);
  };
  return (
    <>
      {data.result.map((index) => (
        <li key={index.id} onClick={() => goToCategory(index.cat_name)}>
          <span>{index.cat_name}</span>
        </li>
      ))}
    </>
  );
};

export default CategoryItems;
