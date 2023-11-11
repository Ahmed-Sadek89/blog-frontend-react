import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import checkAuth from "./checkAuth";
import CategoriesBtn from "./CategoriesBtn";
import ImageInput from "./ImageInput";
import handlePostAction from "./handlePostAction";
import postState from "./postState";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function PostForm() {
  checkAuth();

  const { state } = useLocation();
  const [post, setPost] = postState();
  const [post_image, setPost_image] = useState<File | null>(
    state?.post_image.name || null
  );

  const handleSubmit = handlePostAction({ ...post, post_image });

  // 1 - UPDATE SLICE
  // 2 - MAKE LAYUT FOR LOADING AND EROR
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
          // onChange={setDescription}
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
            <button id="uploadFile">save as a draft</button>
            <button type="submit">Publish</button>
          </div>
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
