import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux';
import { rootState } from '../../Redux/store';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function PostForm() {
  const navigate = useNavigate()
  const token = Cookies.get('authorization');
  const isAuth = token ? true : false; 
  useEffect(() => {
    isAuth === false && navigate('/login')
  }, [isAuth, navigate])
  const categories_getAll_state = useSelector((state: rootState) => state.categories_getAll);
  const { state } = useLocation();
  const [title, setTitle] = useState<string>(state?.title || '')
  const [desc, setDesc] = useState<string>(state?.desc || '')
  const [img, setImg] = useState<string>(state?.img || '')
  const [category, setCategory] = useState<string>(state?.category || '');

  const handleChange = (state: string, setState: React.Dispatch<string>) => {
    setState(state)
  }

  const handleSubmit = () => {
    console.log({ title, desc, img, category })
  }
  return (
    <div className="form-post">
      <div className="form-post-left-side">
        <input
          type="text"
          placeholder='Title'
          value={title}
          onChange={(e) => handleChange(e.target.value, setTitle)}
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
            <span>status: </span><span>draft</span>
          </p>
          <p>
            <span>visability: </span><span>public</span>
          </p>
          {/* for input file */}
          <label htmlFor='uploadFile' >upload file</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            style={{ display: "none" }}
            id='uploadFile'
            onChange={(e) => handleChange(e.target.value, setImg)}
          />
          {/* for input file */}
          <div className="form-post-right-side-publish-btn">
            <button>save as a draft</button>
            <button onClick={() => handleSubmit()}>Publish</button>
          </div>
        </div>


        <div className="form-post-right-side-category">
          <h3>category</h3>
          {
            categories_getAll_state.data.result?.map(index => (
              <div 
                className="form-post-right-side-category-btn" 
                key={index.id} 
              >
                <input
                  checked={category === index.cat_name ? true : false}
                  type="radio"
                  name="category"
                  value={category}
                  onChange={() => handleChange(index.cat_name, setCategory)}
                />
                <span>{index.cat_name}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
export default PostForm