import { Button, List, Popconfirm } from "antd";

const UsersListAntd = ({ users, onDeleteUser, onEditUser }) => {
  const sortedUsers = users.sort((a, b) => {
    if (a.firstName > b.firstName) {
      return 1;
    } else if (a.firstName < b.firstName) {
      return -1;
    } else if (a.lastName > b.lastName) {
      return 1;
    } else if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <List
      itemLayout="horizontal"
      dataSource={sortedUsers}
      renderItem={(user) => (
        <List.Item
          actions={[
            <Button type="default" onClick={() => onEditUser(user)}>
              Edit
            </Button>,
            <Popconfirm
              title="Delete the user"
              description="Are you sure to delete this user?"
              onConfirm={() => onDeleteUser(user.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button danger type="primary">
                Delete
              </Button>
            </Popconfirm>,
          ]}
        >
          <List.Item.Meta
            title={`${user.firstName} ${user.lastName}`}
            style={{ display: "flex", alignItems: "center" }}
          />
        </List.Item>
      )}
    ></List>
  );
};

export default UsersListAntd;
