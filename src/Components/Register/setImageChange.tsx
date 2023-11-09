import React from "react";

const setImageChange = (
  setImage: React.Dispatch<React.SetStateAction<File | null>>
) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };
  return handleImageChange;
};

export default setImageChange;
