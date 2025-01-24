import { connect } from 'react-redux';
import { createUserRequest, deleteUserRequest, getUsersRequest, usersError } from '../redux/actions/users';
import { useEffect, useState } from 'react';
import ModalEditUserAntd from './antd/ModalEditUserAntd';
import NewUserFormAntd from './antd/NewUserFormAntd';
import UsersListAntd from './antd/UserListAntd';

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
        <NewUserFormAntd onSubmit={handleSubmit}/>
        <UsersListAntd onEditUser={handleEditUser} onDeleteUser={handleDeleteUser} users={users}/>
      </div>
      <ModalEditUserAntd
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
