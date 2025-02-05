import { Card, Button, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import hasPermission from "../utils/hasPermission";
import { role_permissions } from "../contants";

const Post = ({ post, onEdit, onDelete, role }) => {
    const permissions = role_permissions[role];
    return (
    <Card
      style={{
        maxWidth: 600,
        margin: "16px auto",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
      }}
      title={post.title}
      extra={
        <div>
            {hasPermission(permissions, 'edit') && (
                <Button
                type="text"
                icon={<EditOutlined />}
                onClick={() => onEdit(post)}
              />
            )}
            {hasPermission(permissions, 'delete') && (
                <Popconfirm
                    title="Delete this post?"
                    onConfirm={() => onDelete(post.id)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="text" danger icon={<DeleteOutlined />} />
                </Popconfirm>
            )} 
        </div>
      }
    >
      <p style={{ fontSize: "16px", color: "#333", marginBottom: 0 }}>
        {post.body}
      </p>
    </Card>
  );
};

export default Post;