import React, { useEffect } from "react";
import { Button, Card, Form, Input, message, Spin } from "antd";
import { connect } from "react-redux";
import { editPostRequest } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const EditPost = ({ editPostRequest }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const { data: post, isLoading, error } = useFetch(`/posts/${id}`);

    const handleEditPost = (values) => {
        editPostRequest({
            id: post.id,
            title: values.title,
            body: values.body,
        });
        form.resetFields();
        navigate(-1);
        message.success("Post updated successfully!");
    };

    useEffect(() => {
        if (post) {
            form.setFieldsValue({
                title: post.title,
                body: post.body,
            });
        }
    }, [post, form]);

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Spin size="large" />
            </div>
        );
    }

    return (
        <Card
            title="Edit Post"
            bordered={false}
            style={{ maxWidth: 600, margin: "0 auto", padding: "20px" }}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleEditPost}
            >
                <Form.Item label="Title" name="title">
                    <Input placeholder="Enter post title" />
                </Form.Item>

                <Form.Item label="Body" name="body">
                    <Input.TextArea rows={4} placeholder="Enter post body" />
                </Form.Item>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button style={{ marginRight: "10px" }} onClick={() => navigate(-1)} type="default">
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Save Changes
                    </Button>
                </div>
            </Form>
        </Card>
    );
};

export default connect(null, { editPostRequest })(EditPost);