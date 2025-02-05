import { Button, Form, Select } from "antd"

const RoleSwitcher = ({ role, setRole }) => {
    const handleChange = (value) => {
        setRole(value);
    };

    return (
        <div>
            <Form.Item label='Select a role: ' >
                <Select 
                    defaultValue={role}
                    style={{ width: 120 }}
                    defaultActiveFirstOption
                    onChange={handleChange}
                    options={[
                        { value: 'User', label: 'User' },
                        { value: 'Editor', label: 'Editor' },
                        { value: 'Admin', label: 'Admin' },
                    ]}
                />
            </Form.Item>
        </div>
  )
}

export default RoleSwitcher