import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";
import checkAuth from "./checkAuth";
import getUserId from "./getUserId";
import CategoriesBtn from "./CategoriesBtn";
import ImageInput from "./ImageInput";

function PostForm() {
  checkAuth();
  const { state } = useLocation();

  const [title, setTitle] = useState<string>(state?.title || "");
  const [description, setDescription] = useState<string>(state?.description || "");
  const [post_image, setPost_image] = useState<string>(state?.post_image || "");
  const [categoryId, setCategoryId] = useState<number>(
    state?.category.cat_id || null
  );
  const userId = getUserId();

  const handleSubmit = () => {
    console.log({ title, description, post_image, categoryId, userId });
  };
  return (
    <div className="form-post">
      <div className="form-post-left-side">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
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
            <button onClick={() => handleSubmit()}>Publish</button>
          </div>
        </div>

        <div className="form-post-right-side-category">
          <h3>category</h3>
          <CategoriesBtn categoryId={categoryId} setCategoryId={setCategoryId} />
        </div>
      </div>
    </div>
  );
}
export default PostForm;
