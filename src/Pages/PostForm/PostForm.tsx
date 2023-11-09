import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import CategoriesBtn from "./CategoriesBtn";
import { rootState } from "../../Redux/store";
import { useSelector } from "react-redux";

function PostForm() {
  const navigate = useNavigate()
  const token = Cookies.get("authorization");
  const isAuth = token ? true : false;
  useEffect(() => {
    isAuth === false && navigate("/login");
  }, [isAuth, navigate]);

  const { state } = useLocation();

  const [title, setTitle] = useState<string>(state?.title || "");
  const [img, setImg] = useState<string>(state?.img || "");
  const [category, setCategory] = useState<string>(state?.category || "");
  
  const [post, setPost] = useState({
    title: state?.title || "",
    img: state?.img || "",
    category: state?.category || "",
  });
  const [desc, setDesc] = useState<string>(state?.desc || "");

  const handleChange = (state: string, setState: React.Dispatch<string>) => {
    setState(state);
  };
  const categories_getAll_state = useSelector(
    (state: rootState) => state.categories_getAll
  );
  const handleSubmit = () => {
    console.log({ title, desc, img, category });
  };
  return (
    <div className="form-post">
      <div className="form-post-left-side">
        <input
          type="text"
          placeholder="Title"
          value={post.title}
          onChange={(e) =>
            setPost((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
        />
        <ReactQuill
          theme="snow"
          value={desc}
          onChange={setDesc}
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
          <label htmlFor="uploadFile">upload file</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            style={{ display: "none" }}
            id="uploadFile"
            onChange={(e) =>
              setPost((prev) => {
                return { ...prev, img: e.target.value };
              })
            }
          />
          {/* for input file */}
          <div className="form-post-right-side-publish-btn">
            <button>save as a draft</button>
            <button onClick={() => handleSubmit()}>Publish</button>
          </div>
        </div>

        <div className="form-post-right-side-category">
          <h3>category</h3>
          {/* <CategoriesBtn
            category={category}
            setCategory={setCategory}
            handleChange={handleChange}
          /> */}
          {categories_getAll_state?.data.result?.map((index) => (
        <div className="form-post-right-side-category-btn" key={index.id}>
          <input
            checked={category === index.cat_name ? true : false}
            type="radio"
            name="category"
            value={category}
            onChange={() => handleChange(index.cat_name, setCategory)}
          />
          <span>{index.cat_name}</span>
        </div>
      ))}
        </div>
      </div>
    </div>
  );
}
export default PostForm;
