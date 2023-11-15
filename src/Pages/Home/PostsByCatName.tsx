import Post from "../../Components/Post/Post";
import { postInfo } from "../../Types/posts";

type props = {
  data: postInfo[];
  cat_name: string | undefined;
};
const PostsByCatName = ({ data, cat_name }: props) => {
  return (
    <>
      {data.length !== 0 && cat_name !== undefined && (
        <div className="posts_layout">
          {data
            .filter((index) => index.category.cat_name === cat_name)
            .map((post: postInfo) => (
              <Post post={post} key={post.id} />
            ))}
        </div>
      )}
    </>
  );
};

export default PostsByCatName;
