import { call, fork, put, takeLatest } from "redux-saga/effects";
import * as actions from '../actions/index';
import * as apis from '../../apis/posts';

function* createPost(action) {
    try {
        const response = yield call(apis.createPost, action.payload);
        yield put(actions.createPostSuccess(response.data));
    } catch (e) {
        console.log(e);
        yield put(actions.postsError({
            error: 'An error occurred when trying to create the post'
        }));
    }
}

function* deletePost(action) {
    try {
        yield call(apis.deletePost, action.payload.postId);
        yield put(actions.deletePostSuccess(action.payload.postId));
    } catch (e) {
        console.log(e);
        yield put(actions.postsError("An error occurred when trying to delete the post"));
    }
}

function* editPost(action) {
    try {
        const response = yield call(apis.editPost, action.payload);
        yield put(actions.editPostSuccess(response.data));
    } catch (e) {
        console.log(e)
        yield put(actions.postsError("An error occurred when trying to edit the post"));
    }
}

function* watchCreatePostRequest() {
    yield takeLatest(actions.Types.CREATE_POST_REQUEST, createPost);
}

function* watchDeletePostRequest() {
    yield takeLatest(actions.Types.DELETE_POST_REQUEST, deletePost);
}

function* watchEditPostRequest() {
    yield takeLatest(actions.Types.EDIT_POST_REQUEST, editPost);
}

const postSagas = [
    fork(watchCreatePostRequest),
    fork(watchDeletePostRequest),
    fork(watchEditPostRequest),
];

export default postSagas;