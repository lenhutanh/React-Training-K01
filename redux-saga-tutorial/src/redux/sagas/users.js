import { call, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from  '../actions/users';
import * as api from "../../api/users"

function* getUsers() {
    try {
        const result = yield call(api.getUsers);
        yield put(actions.getUsersSuccess({
            items: result.data
        }))
    } catch (e) {
        yield put(actions.usersError({
            error: 'An error occurred when trying to get the users'
        }));
    }
}

function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}


function* createUser(action) {
    try {
        yield call(api.createUser, {firstName: action.payload.firstName, lastName: action.payload.lastName});
        yield call(getUsers);
    } catch (e) {
        yield put(actions.usersError({
            error: 'An error occurred when trying to create the user'
        }));
    }
}

function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser)
}

function* deleteUser({userId}) {
    try {
        yield call(api.deleteUser, userId);
        yield call(getUsers);
    } catch (e) {
        yield put(actions.usersError({
            error: 'An error occurred when trying to delete the user'
        }));
    }
}

function* watchDeleteUserRequest() {
    while(true) {
        const action = yield take(actions.Types.DELETE_USER_REQUEST);
        yield call(deleteUser, {
            userId: action.payload.userId
        })
    }
}

function* editUser({user}) {
    try {
        console.log(user);
        yield call(api.editUser, user);
        yield call(getUsers);
    } catch (e) {
        yield put(actions.usersError({
            error: 'An error occurred when trying to edit the user'
        }));
    }
}

function* watchEditUserRequest() {
    while(true) {
        const action = yield take(actions.Types.EDIT_USER_REQUEST);
        yield call(editUser, {
            user: action.payload.user
        })
    }
}

function* getUserById({payload}) {
    try {
        const {userId} = payload;
        const result = yield call(api.getUserById, userId);
        yield put(actions.getUserByIdSuccess({ item: result.data }));
    } catch (e) {
        yield put(actions.usersError({
            error: 'An error occurred when trying to get the user'
        }));
    }
}

function* watchGetUserByIdRequest() {
    yield takeLatest(actions.Types.GET_USER_BY_ID_REQUEST, getUserById)
}

const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest),
    fork(watchEditUserRequest),
    fork(watchGetUserByIdRequest)
];

export default usersSagas;