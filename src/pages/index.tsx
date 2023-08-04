import useFetch from '@/hooks/useFetch';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { Button, Form, Input, Modal } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

const Home = () => {
    const { t } = useTranslation(['common']);
    const [loginForm] = Form.useForm();
    const [forgotPasswordForm] = Form.useForm();
    const [modalOpen, setModalOpen] = useState(false);
    const onLoginHandler = () => {
        loginForm.validateFields().then((values) => {
            console.log(values);
        });
    };

    const onForgotPasswordHandler = () => {
        forgotPasswordForm.validateFields().then((values) => {
            console.log(values);
        });
    };
    // const fetch = useFetch();
    // const getSearchResultQuery = useQuery({
    //     keepPreviousData: true,
    //     queryKey: ['search'],
    //     queryFn: async () => {
    //         const response = await fetch.GET(`/api/login`);
    //         if (!response.success) {
    //             throw new Error(response.message);
    //         }
    //         console.log(response.data);
    //         return response.data;
    //     },
    // });

    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className="w-full max-w-[400px]">
                <Form form={loginForm} layout="vertical">
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Username is required',
                            },
                        ]}
                    >
                        <Input placeholder="Username" prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Password is required',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Password" prefix={<LockOutlined />} />
                    </Form.Item>
                    <Button className="mt-3" type="primary" block onClick={onLoginHandler}>
                        Login
                    </Button>
                </Form>
                <div className="text-[12px] cursor-pointer hover:text-[#14aafd] mt-2" onClick={() => setModalOpen(true)}>
                    Forget Password
                </div>
            </div>
            <Modal
                title="Forget Password"
                open={modalOpen}
                onOk={onForgotPasswordHandler}
                onCancel={() => setModalOpen(false)}
                okText="Reset Password"
                cancelText="Cancel"
            >
                <Form form={forgotPasswordForm} layout="vertical" className="mt-5">
                    <Form.Item
                        label={t('Email')}
                        required
                        name="email"
                        rules={[
                            {
                                required: true,
                                validator(_, value) {
                                    console.log(value);
                                    if (!value) {
                                        return Promise.reject('Email is required');
                                    }
                                },
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Home;
