import { Button, Form, Input, Select } from 'antd';
import React from 'react';

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export const AdminPage: React.FC = () => {
    const [form] = Form.useForm();

    const onGenderChange = (value: string) => {
        console.log(value)
    };

    const onFinish = (values: any) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
        >
            <Form.Item name="Book Title" label="Book Title" >
                <Input />
            </Form.Item>
            <Form.Item name="Genre" label="Genre">
                <Select
                    placeholder="Select a book genre"
                    onChange={onGenderChange}
                    allowClear
                >
                    <Option value="male">Genre</Option>
                    <Option value="female">Genre</Option>
                    <Option value="other">Genre</Option>
                </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
};