import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ModalEditUserAntd from '../components/antd/ModalEditUserAntd';
import { connect } from 'react-redux';
import { getUserByIdRequest } from '../redux/actions/users';

const EditUser = ({ user, getUserByIdRequest }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    getUserByIdRequest({
        userId: id
    })
  }, [id, getUserByIdRequest]);

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
      <ModalEditUserAntd
        show={true}
        handleClose={handleClose}
        dataUserEdit={user}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.users.item
});

export default connect(mapStateToProps, { 
  getUserByIdRequest
})(EditUser);
