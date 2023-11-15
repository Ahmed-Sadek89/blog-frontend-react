import {  useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { rootState } from "../../Redux/store";
import CurrentPost from "../../Components/CurrentPost/CurrentPost";
import OtherPosts from "../../Components/OtherPosts/OtherPosts";
import fetchPosts from "./fetchPosts";

const PostPage = () => {
  const { post_id } = useParams();
  fetchPosts();
  const posts_getById_state = useSelector(
    (state: rootState) => state.post_getById_state
  );
  const posts_getByCategory_state = useSelector(
    (state: rootState) => state.posts_getByCategory_state
  );
  return (
    <div className="post-single">
      <div className="post-single-current">
        <CurrentPost postState={posts_getById_state} postId={parseInt(post_id|| "")} />
      </div>

      <div className="post-single-other">
        <h3>other posts you may like</h3>
        <OtherPosts
          postId={post_id}
          posts={posts_getByCategory_state?.data?.result}
        />
      </div>
    </div>
  );
};

export default PostPage;
