import { List } from "antd";
import Post from "./Post";

const PostsList = ({ posts, onDeletePost, onEditPost, role }) => {
  const sortedPosts = posts.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <List
      itemLayout="horizontal"
      dataSource={sortedPosts}
      renderItem={(post) => (
        <Post
            post={post}
            onDelete={onDeletePost}
            onEdit={onEditPost}
            role={role}
        ></Post>
      )}
    ></List>
  );
};

export default PostsList;
