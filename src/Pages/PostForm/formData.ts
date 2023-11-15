import { postPayload } from "../../Types/posts";

export function getFormData(post: postPayload, user_id: number): FormData {
    const formData = new FormData();
    formData.append("title", post.title);
    formData.append("description", post.description);
    formData.append("post_image", post.post_image as File);
    formData.append("category_id", post.category_id?.toString() || '0');
    formData.append("user_id", user_id.toString());
    return formData
}