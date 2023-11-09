import { useNavigate } from "react-router-dom";
import { postType } from "../../Types/types";

type props = {
  postId: string | undefined;
  posts: postType[] | [];
};
const OtherPosts = ({ posts, postId }: props) => {
    const navigate = useNavigate()
  const handleNavigate = (id: string) => {
    window.scrollTo(0, 0);
    navigate(`/post/${id}`);
  };
  return (
    <div className="post-single-other-all">
      {[...posts.filter((index) => index.id !== parseInt(postId || ""))].map(
        (index) => (
          <div className="post-single-other-all-item" key={index.id}>
            <img src={index.post_image} alt={index.title} />
            <h4 onClick={() => handleNavigate(index.id.toString())}>
              {index.title.slice(0, 77)}...
            </h4>
            <button onClick={() => handleNavigate(index.id.toString())}>
              read more
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default OtherPosts;
