import axios from "axios";

export const createPost = ({ title, body }) => {
    return axios.post('/posts', { title, body });
};

export const deletePost = (postId) => {
    return axios.delete(`/posts/${postId}`);
};

export const editPost = ({ id, title, body }) => {
    return axios.put(`/posts/${id}`, { title, body });
};