import { Button, Form, Input, Select, InputNumber } from 'antd';
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

    const onBindingChange = (value: string) => {
        console.log(value)
    };
    const onGenreChange = (value: string) => {
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
            <Form.Item name="book Title" label="book Title" >
                <Input placeholder="book title"/>
                {/*{ isMobile ? <span>title</span> : null}*/}
            </Form.Item>
            <Form.Item name="author" label="author" >
                <Input />
            </Form.Item>
            <Form.Item label="year">
                <InputNumber />
            </Form.Item>
            <Form.Item name="publishing house" label="publishing house" >
                <Input />
            </Form.Item>
            <Form.Item label="pages">
                <InputNumber />
            </Form.Item>
            <Form.Item name="binding" label="binding">
                <Select
                    placeholder="Select a type of binding"
                    onChange={onBindingChange}
                    allowClear
                >
                    <Option value="hard">hard</Option>
                    <Option value="soft">soft</Option>
                </Select>
            </Form.Item>
            <Form.Item name="format" label="format" >
                <Input placeholder={'70x100'}/>
            </Form.Item>
            <Form.Item name="genre" label="genre">
                <Select
                    placeholder="Select a book genre"
                    onChange={onGenreChange}
                    allowClear
                >
                    <Option value="all">all</Option>
                    <Option value="business">business</Option>
                    <Option value="detective">detective</Option>
                    <Option value="foreign">foreign</Option>
                    <Option value="history">history</Option>
                    <Option value="classic">classic</Option>
                    <Option value="psycho">psycho</Option>
                    <Option value="computer">computer</Option>
                    <Option value="culture">culture</Option>
                    <Option value="science">science</Option>
                    <Option value="journalistic">journalistic</Option>
                    <Option value="reference">reference</Option>
                    <Option value="fantastic">fantastic</Option>
                    <Option value="humor">humor</Option>
                </Select>
            </Form.Item>
            <Form.Item name="weight" label="weight" >
                <Input placeholder={'350 g.'}/>
            </Form.Item>
            <Form.Item name="isbn" label="isbn" >
                <Input  placeholder={'978-5-4461-0923-4'}/>
            </Form.Item>
            <Form.Item name="manufacturer" label="manufacturer" >
                <Input placeholder={'ООО «Питер Мейл». РФ'}/>
            </Form.Item>
            <Form.Item name="description" label="description" >
                <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    add book
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    reset
                </Button>
            </Form.Item>
        </Form>
    );
};