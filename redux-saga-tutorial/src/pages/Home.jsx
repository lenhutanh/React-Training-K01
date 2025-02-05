import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { createUserRequest, deleteUserRequest, getUsersRequest } from '../redux/actions/users';
import NewUserFormAntd from '../components/antd/NewUserFormAntd';
import UsersListAntd from '../components/antd/UserListAntd';
import ModalEditUserAntd from '../components/antd/ModalEditUserAntd';
import { useNavigate } from 'react-router-dom';
import { message, Spin } from 'antd';
import useFetch from '../hooks/useFetch';

function Home({ getUsersRequest, createUserRequest, deleteUserRequest}) {

    const navigate = useNavigate();
    // useEffect(() => {
    //     getUsersRequest();
    // }, [getUsersRequest]);

    const { data, isLoading, error} = useFetch('https://jsonplaceholder.typicode.com/users');
    const handleSubmit = ({firstName, lastName}) => {
      createUserRequest({
        firstName,
        lastName
      });
      message.success("Create the user successfully!");
    }

    const handleDeleteUser = (userId) => {
      deleteUserRequest(userId);
      message.success("Delete the user successfully!");
    }
    
    const handleEditUser = (user) => {
      navigate(`/user/${user.id}`)
    }

  return (
    <>
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        {/* <NewUserFormAntd onSubmit={handleSubmit}/> */}
        {isLoading ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'}}
          >
            <Spin size='large'/>
          </div>
        ) : (
          <UsersListAntd onEditUser={handleEditUser} onDeleteUser={handleDeleteUser} users={data}/>
        )}
      </div>
    </>
  );
}

// const mapStateToProps = (state) => ({
//   users: state.users.items,
// });

// export default connect(mapStateToProps, { 
//   getUsersRequest, 
//   createUserRequest,
//   deleteUserRequest
// })(Home);

export default Home;
