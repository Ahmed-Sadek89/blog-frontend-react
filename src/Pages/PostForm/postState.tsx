import { useState } from "react";
import { post } from "./postType";
import { useLocation } from "react-router-dom";

const postState = () => {
  const { state } = useLocation();
  return useState<post>({
    title: state?.title || "",
    description: state?.description || "",
    post_image: state?.post_image || null,
    category_id: state?.category.cat_id || NaN,
  });
};

export default postState;
