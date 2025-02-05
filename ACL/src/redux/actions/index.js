export const Types = {
    CREATE_POST_REQUEST: 'posts/create_post_request',
    CREATE_POST_SUCCESS: 'posts/create_post_success',
    DELETE_POST_REQUEST: 'posts/delete_post_request',
    DELETE_POST_SUCCESS: 'posts/delete_post_success',
    EDIT_POST_REQUEST: 'posts/edit_post_request',
    EDIT_POST_SUCCESS: 'posts/edit_post_success',
    POSTS_ERROR: 'posts/posts_error'
};

export const createPostRequest = ({title, body}) => ({
    type: Types.CREATE_POST_REQUEST,
    payload: {
        title,
        body
    }
});

export const createPostSuccess = (post) => ({
    type: Types.CREATE_POST_SUCCESS,
    payload: {
        post
    }
});

export const deletePostRequest = (postId) => ({
    type: Types.DELETE_POST_REQUEST,
    payload: {
        postId
    }
});

export const deletePostSuccess = (postId) => ({
    type: Types.DELETE_POST_SUCCESS,
    payload: {
        postId
    }
});

export const editPostRequest = ({ id, title, body }) => ({
    type: Types.EDIT_POST_REQUEST,
    payload: {
        id,
        title,
        body
    }
});

export const editPostSuccess = (post) => ({
    type: Types.EDIT_POST_SUCCESS,
    payload: {
        post
    }
});

export const postsError = ({error}) => ({
    type: Types.POSTS_ERROR,
    payload: {
        error
    }
});