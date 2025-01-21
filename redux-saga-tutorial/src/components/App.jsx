import { connect } from 'react-redux';
import { createUserRequest, deleteUserRequest, getUsersRequest, usersError } from '../actions/users';
import { useEffect, useState } from 'react';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import ModalEditUser from './ModalEditUser';

function App({ users, getUsersRequest, createUserRequest, deleteUserRequest}) {

  const [isShowModalEditUser, setIsShowModalEditUser] = useState(false);
  const [dataUserEdit, setDataUserEdit] = useState({});

  useEffect(() => {
    getUsersRequest();
  }, [getUsersRequest]);

  const handleSubmit = ({firstName, lastName}) => {
    createUserRequest({
      firstName,
      lastName
    });
  }

  const handleDeleteUser = (userId) => {
    deleteUserRequest(userId);
  }
  
  const handleEditUser = (user) => {
    console.log(user);
    setDataUserEdit(user);
    setIsShowModalEditUser(true);
  }

  return (
    <>
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        <NewUserForm onSubmit={handleSubmit}/>
        <UsersList onEditUser={handleEditUser} onDeleteUser={handleDeleteUser} users={users}/>
      </div>
      <ModalEditUser
        show={isShowModalEditUser}
        handleClose={() => setIsShowModalEditUser(false)}
        dataUserEdit={dataUserEdit}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  users: state.users.items,
});

export default connect(mapStateToProps, { 
  getUsersRequest, 
  createUserRequest,
  deleteUserRequest
})(App);
