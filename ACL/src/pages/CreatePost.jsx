import React from 'react'
import NewPostForm from '../components/NewPostForm'
import { createPostRequest } from '../redux/actions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ createPostRequest }) => {

    const navigate = useNavigate();
    
    const handleSubmit = ({title, body}) => {
        createPostRequest({
            title,
            body
        });
        navigate(-1);
    }

  return (
    <>
        <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
            <NewPostForm onSubmit={handleSubmit}/>
        </div>
    </>
  )
}

export default connect(null, { 
    createPostRequest,
})(CreatePost);