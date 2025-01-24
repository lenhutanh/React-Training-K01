import axios from "axios";

export const getUsers = () => {
    return axios.get('/users')
};

export const createUser = ({firstName, lastName}) => {
    return axios.post('/users', {
        firstName,
        lastName
    });
}

export const deleteUser = (userId) => {
    return axios.delete(`/users/${userId}`);
}

export const editUser = (user) => {
    return axios.put(`/users/${user.id}`, {
        firstName: user.firstName,
        lastName: user.lastName,
    });
}

export const getUserById = ({userId}) => {
    return axios.get(`/users/${userId}`);
}