import { useNavigate } from "react-router-dom";
import { postInfo } from "../../Types/posts";

type props = {
  post: postInfo;
};

const Post = ({ post }: props) => {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post-info">
        <h1 onClick={() => navigate(`/post/${post.id.toString()}`)}>
          {post.title}
        </h1>
        <p
          dangerouslySetInnerHTML={{
            __html: post.description.slice(0, 200) + "...",
          }}
        />

        <button onClick={() => navigate(`/post/${post.id.toString()}`)}>
          read more...
        </button>
      </div>
      <div className="post-background">
        <img src={post.post_image} alt={post.title} />
      </div>
    </div>
  );
};

export default Post;
