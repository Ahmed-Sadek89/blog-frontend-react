import { useSelector } from "react-redux";
import { rootState } from "../../Redux/store";
import { useParams } from "react-router-dom";
import AllPosts from "./AllPosts";
import PostsByCatName from "./PostsByCatName";

const home = () => {
  let { data } = useSelector((state: rootState) => state.posts_get);
  const { cat_name } = useParams();
  return (
    <>
      <AllPosts data={data.result} cat_name={cat_name} />
      <PostsByCatName data={data.result} cat_name={cat_name} />
    </>
  );
};

export default home;
