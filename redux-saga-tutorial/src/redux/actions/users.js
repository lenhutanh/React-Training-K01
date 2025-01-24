export const Types = {
    GET_USERS_REQUEST: 'users/get_users_request',
    GET_USERS_SUCCESS: 'users/get_users_success',
    GET_USER_BY_ID_REQUEST: 'users/get_user_by_id_request',
    GET_USER_BY_ID_SUCCESS: 'users/get_user_by_id_success',
    CREATE_USER_REQUEST: 'users/create_user_request',
    DELETE_USER_REQUEST: 'users/delete_user_request',
    EDIT_USER_REQUEST: 'users/edit_user_request',
    USERS_ERROR: 'users/users_error'
};

export const getUsersRequest = () => ({
    type: Types.GET_USERS_REQUEST
});

export const getUsersSuccess = ({items}) => ({
    type: Types.GET_USERS_SUCCESS,
    payload: {
        items
    }
});

export const createUserRequest = ({firstName, lastName}) => ({
    type: Types.CREATE_USER_REQUEST,
    payload: {
        firstName,
        lastName
    }
});

export const deleteUserRequest = (userId) => ({
    type: Types.DELETE_USER_REQUEST,
    payload: {
        userId
    }
});

export const editUserRequest = (user) => ({
    type: Types.EDIT_USER_REQUEST,
    payload: {
        user: user
    }
})

export const usersError = ({error}) => ({
    type: Types.USERS_ERROR,
    payload: {
        error
    }
});

export const getUserByIdRequest = (userId) => ({
    type: Types.GET_USER_BY_ID_REQUEST,
    payload: {
        userId
    }
});

export const getUserByIdSuccess = ({item}) => ({
    type: Types.GET_USER_BY_ID_SUCCESS,
    payload: {
        item
    }
});