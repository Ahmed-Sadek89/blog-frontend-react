import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function PostForm() {
  const [value, setValue] = useState('');
  // COMPLETE SOLDIER .....
  // START MAKE THE STRUCTURE OF THIS PAGE, STYLE IT
  // CHECK IF THERE IS POST ID => UPDATE IT
  // NO! => ADD NEW POST
  // FINALLY =>  BACKEND
  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
export default PostForm