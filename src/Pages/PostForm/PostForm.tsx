import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import checkAuth from "./checkAuth";
import CategoriesBtn from "./CategoriesBtn";
import ImageInput from "./ImageInput";
import handlePostAction from "./handlePostAction";
import postState from "./postState";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { rootState } from "../../Redux/store";
import LoadingFormAction from "../../Components/LoadingFormAction/LoadingFormAction";

function PostForm() {
  checkAuth();

  const { state } = useLocation();
  const [post, setPost] = postState();
  const [post_image, setPost_image] = useState<File | null>(
    state?.post_image.name || null
  );

  const handleSubmit = handlePostAction({ ...post, post_image });
  const addPostState = useSelector((state: rootState) => state.addNewPostState)
  const updatePostState = useSelector((state: rootState) => state.updatePostState)
  const isSubmitted = addPostState.loading || updatePostState.loading
  return (
    <form
      className="form-post"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <div className="form-post-left-side">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={post.title}
          onChange={(e) =>
            setPost((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
        />
        <ReactQuill
          theme="snow"
          value={post.description}
          onChange={(e: string) =>
            setPost((prev) => {
              return { ...prev, description: e };
            })
          }
          style={{ height: "300px" }}
        />
      </div>
      <div className="form-post-right-side">
        <div className="form-post-right-side-publish">
          <h3>publish</h3>
          <p>
            <span>status: </span>
            <span>draft</span>
          </p>
          <p>
            <span>visability: </span>
            <span>public</span>
          </p>
          {/* for input file */}
          <ImageInput post_image={post_image} setPost_image={setPost_image} />
          {/* for input file */}
          <div className="form-post-right-side-publish-btn">
            <button id="uploadFile" disabled={true} >save as a draft</button>
            <button type="submit" disabled={isSubmitted} style={{ cursor: `${isSubmitted ? "not-allowed" : "pointer"}` }}>Publish</button>
          </div>
          <div style={{ display: 'flex', justifyContent: "center" }}>
            {isSubmitted &&
              <LoadingFormAction />
            }
          </div>
          {
            addPostState.error &&
            <p style={{ color: "red", fontWeight: "bold" }}>{addPostState.data.result}</p>
          }
        </div>

        <div className="form-post-right-side-category">
          <h3>category</h3>
          <CategoriesBtn
            categoryId={post.category_id}
            setCategoryId={setPost}
          />
        </div>
      </div>
    </form>
  );
}
export default PostForm;
