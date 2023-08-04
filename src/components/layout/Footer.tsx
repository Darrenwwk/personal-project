import Link from 'next/link';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation(['footer']);
    return (
        <footer className="text-white bg-black ">
            <div className=" max-w-[1250px] mx-auto px-[50px] py-[50px] lg:px-5 lg:py-5">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div id="intro" className="lg:basis-2/5 lg:p-5 lg:pr-[100px]">
                        <div>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/webtech.jpeg" alt="Wonsys Martech Solutions Logo" className="w-[250px]" />
                        </div>
                        <div className="mt-3">
                            <p className="leading-[25px] text-sm text-justify text-gray-400">{t('intro')}</p>
                        </div>
                    </div>
                    <div id="contact" className="mt-[60px] lg:mt-0 lg:basis-2/5 lg:p-5">
                        <h3>{t('contact')}</h3>
                        <div className="mt-5">
                            <div className="flex mt-3">
                                <span>
                                    <MdLocationOn />
                                </span>
                                <p className="ml-2 text-sm text-gray-400">No.29, Jalan Menteri Iswana, Mont Kiara, 52200 Kuala Lumpur.</p>
                            </div>
                            <div className="flex mt-3">
                                <span>
                                    <MdEmail />
                                </span>
                                <p className="ml-2 text-sm text-gray-400">your@mailaddress.com</p>
                            </div>
                            <div className="flex mt-3">
                                <span>
                                    <MdPhone />
                                </span>
                                <p className="ml-2 text-sm text-gray-400">+6012 309 0314</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="rights" className="mt-[60px] lg:mt-[30px]">
                    <p className="m-0 text-sm">© {new Date().getFullYear()} — Web Tech Engineering. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
