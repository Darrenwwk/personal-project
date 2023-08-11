import useFetch from '@/hooks/useFetch';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { Button, Form, Input, Modal, Spin, notification } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Layout from '@/components/layout';
import Typewriter from 'typewriter-effect';
import { GetStaticProps } from 'next';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { RiMailSendLine } from 'react-icons/ri';
import Link from 'next/link';

const Home = () => {
    const { t } = useTranslation(['common']);
    const [enquiryForm] = Form.useForm();
    const [forgotPasswordForm] = Form.useForm();
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);

    const sendMail = async (data: any) => {
        setLoading(true);
        try {
            const response = await fetch('/api/enquiry', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                notification.error({
                    message: t('common:somethingWentWrong'),
                    description: t('common:pleaseTryAgainLater'),
                });
                return;
            }

            notification.success({
                message: t('success'),
                description: t('common:successMessage'),
            });
        } catch (error) {
            notification.error({
                message: t('common:somethingWentWrong'),
                description: t('common:pleaseTryAgainLater'),
            });
        } finally {
            setLoading(false);
        }
    };

    const onSubmitHandler = () => {
        enquiryForm.validateFields().then(async (data) => {
            await sendMail(data);
            console.log(data);
            // enquiryForm.resetFields();
        });
    };

    return (
        <Layout activeMenu={['home']}>
            <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
                <h1 className="px-4 text-lg text-primary sm:text-xl">
                    <Typewriter
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
                    />
                </h1>
                <Spin spinning={loading}>
                    <Form form={enquiryForm} disabled={loading} className="max-w-[625px]" layout="vertical">
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: t('required', {
                                        name: t('name'),
                                    }) as string,
                                },
                            ]}
                            name="name"
                        >
                            <Input placeholder={t('name') as string} className="form-input" />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: t('required', {
                                        name: t('email'),
                                    }) as string,
                                },
                            ]}
                            name="email"
                        >
                            <Input type="email" placeholder={t('email') as string} className="form-input" />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: t('required', {
                                        name: t('phoneNumber'),
                                    }) as string,
                                },
                            ]}
                            name="phoneNumber"
                        >
                            <PhoneInput
                                country="my"
                                enableSearch
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: t('required', {
                                        name: t('message'),
                                    }) as string,
                                },
                            ]}
                            name="comment"
                        >
                            <Input.TextArea placeholder={t('message') as string} rows={6} className="form-input" />
                        </Form.Item>
                    </Form>
                </Spin>
                <div className="flex justify-end">
                    <Button className="btn-white" block disabled={loading} loading={loading} onClick={onSubmitHandler}>
                        {t('send')} <RiMailSendLine />
                    </Button>
                </div>
                <Link href={'/backend'}>
                    <Button>see data from database</Button>
                </Link>
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
