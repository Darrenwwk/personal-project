import useFetch from '@/hooks/useFetch';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { Button, Form, Input, Modal } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Layout from '@/components/layout';
import Typewriter from 'typewriter-effect';
import { GetStaticProps } from 'next';

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
        <Layout activeMenu={['home']}>
            <div className="flex items-center justify-center w-full h-screen">
                <h1 className="px-4 text-lg text-primary sm:text-xl">
                    {/* <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(500)
                                .changeDelay(200)
                                .typeString('baby love you 不要亲亲抱抱 今天你睡地上')
                                .pauseFor(1000)
                                .deleteChars(13)
                                .typeString('还是亲一口吧 你还是睡地上哦😘')
                                .pauseFor(1000)
                                .deleteChars(16)
                                .typeString('ok la 亲亲抱抱爱你哟😘')
                                .start();
                        }}
                    /> */}
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(500)
                                .changeDelay(200)
                                .typeString('lilian 几点了还在那边跟我跳舞 不用睡觉啊？')
                                .pauseFor(1000)
                                .deleteChars(4)
                                .typeString('吃饭啊？')
                                .pauseFor(1000)
                                .deleteChars(18)
                                .typeString('跳的不错 继续努力吧 明天记得煮好料给我')
                                .start();
                        }}
                    />
                </h1>
            </div>
        </Layout>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['home', 'service', 'common', 'header', 'footer'])),
        },
    };
};
