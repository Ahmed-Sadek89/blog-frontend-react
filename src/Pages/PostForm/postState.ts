import { useState } from "react";
import { useLocation } from "react-router-dom";
import { postPayload } from "../../Types/posts";

const postState = () => {
  const { state } = useLocation();
  return useState<postPayload>({
    title: state?.title || "",
    description: state?.description || "",
    post_image: state?.post_image || null,
    category_id: state?.category.cat_id || null,
  });
};

export default postState;
