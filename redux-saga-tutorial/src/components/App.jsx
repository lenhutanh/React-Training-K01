import { connect } from 'react-redux';
import { createUserRequest, deleteUserRequest, getUsersRequest, usersError } from '../actions/users';
import { useEffect } from 'react';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';

function App({ users, getUsersRequest, createUserRequest, deleteUserRequest}) {
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
  
  const handleCloseAlert = () => {
    usersError('');
  }
  return (
    <>
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        <NewUserForm onSubmit={handleSubmit}/>
        <UsersList onDeleteUser={handleDeleteUser} users={users}/>
      </div>
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
