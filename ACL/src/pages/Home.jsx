import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, message, Spin } from 'antd';
import { deletePostRequest } from '../redux/actions';
import PostsList from '../components/PostsList';
import useFetch from '../hooks/useFetch';
import RoleSwitcher from '../components/RoleSwitcher';
import { role_permissions } from '../contants';
import hasPermission from '../utils/hasPermission';
import { useEffect, useState } from 'react';

function Home({ deletePostRequest }) {

    const navigate = useNavigate();

    const [role, setRole] = useState(localStorage.getItem('role') || 'User');

    useEffect(() => {
        localStorage.setItem('role', role);
    }, [role]);

    const permissions = role_permissions[role];

    const { data, isLoading, error} = useFetch('/posts');

    const handleDeletePost = (postId) => {
        deletePostRequest(postId);
        message.success("Delete the post successfully!");
    }
    
    const handleEditPost = (post) => {
        navigate(`/edit/${post.id}`)
    }

    if (isLoading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'}}
            >
                <Spin size='large'/>
            </div>
        )
    }
    return (
        <>
        <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
            <RoleSwitcher role={role} setRole={setRole} />
            {hasPermission(permissions, 'create') && (
                <Button block type="primary" onClick={() => navigate('/create')}>
                    Create a post
                </Button>
            )}
            <PostsList onEditPost={handleEditPost} onDeletePost={handleDeletePost} posts={data} role={role}/>
        </div>
        </>
    );
}

export default connect(null, { 
    deletePostRequest,
})(Home);