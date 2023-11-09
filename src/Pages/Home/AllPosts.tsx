import { postType } from "../../Types/types";
import Post from "../../Components/Post/Post";

type props = {
  data: postType[];
  cat_name: string | undefined;
};
const AllPosts = ({ data, cat_name }: props) => {
  return (
    <>
      {data?.length !== 0 && cat_name === undefined && (
        <div className="posts_layout">
          {data?.map((post: postType) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllPosts;
