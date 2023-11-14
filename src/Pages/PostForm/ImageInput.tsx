import React from "react";
import { useLocation } from "react-router-dom";

type props = {
  post_image: File| null;
  setPost_image: React.Dispatch<React.SetStateAction<File| null>>;
};
const ImageInput = ({ post_image, setPost_image }: props) => {
  const {state} = useLocation();
  return (
    <>
      <label htmlFor="uploadFile">
        {(post_image === null && state !== null) &&  `image ${state.post_image} uploaded`}
        {(post_image !== null && state !== null) &&  `image ${post_image.name} uploaded`}
        {(post_image !== null && state === null) &&  `image ${post_image.name} uploaded`}
        {(post_image === null && state === null) &&  `upload image`}
      </label>
      <input
        type="file"
        name="post_image"
        accept="image/png, image/jpeg"
        style={{ display: "none" }}
        id="uploadFile"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            setPost_image(e.target.files[0])
          }
        }}
      />
    </>
  );
};

export default ImageInput;
