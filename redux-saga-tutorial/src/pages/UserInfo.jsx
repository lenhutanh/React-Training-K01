import { Card, Descriptions, Spin } from 'antd';
import { getUserByIdRequest } from '../redux/actions/users';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const UserInfo = () => {
    const { id } = useParams();
  
    // useEffect(() => {
    //     getUserByIdRequest({
    //         userId: id
    //     })
    // }, [id, getUserByIdRequest]);

    const { data: user, isLoading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    return (
    <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
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
          <Card title="User Information" bordered={false} style={{ width: 600 }}>
            <Descriptions column={1} bordered>
              <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
              <Descriptions.Item label="Username">{user.username}</Descriptions.Item>
              <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
              <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
              <Descriptions.Item label="Website">
                <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                  {user.website}
                </a>
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
              </Descriptions.Item>
              <Descriptions.Item label="Coordinates">
                Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
              </Descriptions.Item>
              <Descriptions.Item label="Company">
                {`${user.company.name} (${user.company.catchPhrase})`}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        )
      }
    </div>
    );
};

// const mapStateToProps = (state) => ({
//     user: state.users.item
// });
  
// export default connect(mapStateToProps, { 
//     getUserByIdRequest
// })(UserInfo);

export default UserInfo;