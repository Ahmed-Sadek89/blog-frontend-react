import edit from "../../Images/edit.png";
import Delete from "../../Images/delete.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { getDecodedToken } from "../../assets/getDecodedToken";
import { props } from "./CurrentPostProps";
import { postInfo } from "../../Types/posts";
import { getDateTimeFromString } from "./getDateTimeFromString";
import deleteThisPost from "./deleteThisPost";

const CurrentPost = ({ postState, postId }: props) => {
  const dispatch = useDispatch<AppDispatch>();
  const token = Cookies.get("authorization") || "";
  const isAuth = token ? true : false;
  const result = postState.data.result as postInfo;
  const {date, time} = getDateTimeFromString(result?.published_at);
  let decoded = getDecodedToken(token);
  const isUserOwnPost = decoded.email === result?.user?.email;

  return (
    <>
      <img src={result?.post_image} alt={result?.title} className="post-single-current-img"/>
      <div className="post-single-current-owner">
        <img src={result?.user?.image} alt={result?.user?.username} />
        <div className="post-single-current-owner-texts">
          <span>{result?.user?.username}</span>
          <span>posted at {date} {time}</span>
        </div>
        {isAuth === true && isUserOwnPost && (
          <div className="post-single-current-owner-options">
            <Link to={`/write?edit=${postId}`} state={result}>
              <img src={edit} alt="edit" />
            </Link>
            <img src={Delete} alt="Delete" onClick={() => deleteThisPost(postId, dispatch)} />
          </div>
        )}
      </div>
      <h1>{result?.title}</h1>

      <p
        dangerouslySetInnerHTML={{
          __html: result?.description || "",
        }}
      />
    </>
  );
};

export default CurrentPost;
