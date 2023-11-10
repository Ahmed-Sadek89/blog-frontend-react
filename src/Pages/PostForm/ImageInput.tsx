import React from "react";


type props = {
    post_image: string, 
    setPost_image: React.Dispatch<React.SetStateAction<string>>
}
const ImageInput = ({post_image, setPost_image}: props) => {
  return (
    <>
      <label htmlFor="uploadFile">
        {post_image === "" ? "upload file" : `image ${post_image} uploaded`}
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        style={{ display: "none" }}
        id="uploadFile"
        onChange={(e) => {
            setPost_image(e.target.value);
        }}
      />
    </>
  );
};

export default ImageInput;
