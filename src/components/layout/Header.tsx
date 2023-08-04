import Link from 'next/link';
import cn from 'classnames';
import { useState } from 'react';
import { Drawer, Dropdown, MenuProps } from 'antd';
import { AiFillCaretDown } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'next-i18next';
import useDocumentScrollThrottled from '@/hooks/useDocumentScrollThrottled';

interface HeaderProps {
    activeMenu: string[];
}

const Header: React.FC<HeaderProps> = ({ activeMenu }) => {
    const { t } = useTranslation(['header']);
    const [open, setOpen] = useState<boolean>(false);
    const [shouldHideHeader, setShouldHideHeader] = useState<boolean>(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 300;

    useDocumentScrollThrottled((callbackData) => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const items: MenuProps['items'] = [
        {
            label: (
                <Link
                    className={cn(
                        'nav no-underline text-xs font-[500] uppercase',
                        activeMenu.includes('customerRelationshipManagementSystem') && 'active'
                    )}
                    href="/product/customer-relationship-management-system"
                >
                    {t('customerRelationshipManagementSystem')}
                </Link>
            ),
            key: 'customer-relationship-management-system',
        },
        {
            label: (
                <Link
                    className={cn('nav no-underline text-xs font-[500] uppercase', activeMenu.includes('projectManagementSystem') && 'active')}
                    href="/product/project-management-system"
                >
                    {t('projectManagementSystem')}
                </Link>
            ),
            key: 'project-management-system',
        },
    ];

    return (
        <header className={cn('leading-[80px] bg-black fixed w-full top-0 left-0 z-50', shouldHideHeader ? 'hide' : '')}>
            <div className="max-w-[1250px] flex items-center justify-between m-auto px-5">
                <div className="h-full logo">
                    <Link href="/">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/webtech.jpeg" alt="Web Tech" className="h-[45px] align-middle" />
                    </Link>
                </div>
                <div>
                    <nav className="hidden lg:block">
                        <ul className="flex items-center list-none gap-9">
                            <li className="leading-[35px]">
                                <Link
                                    className={cn('nav no-underline text-sm font-[500] uppercase', activeMenu.includes('home') && 'active')}
                                    href="/"
                                >
                                    {t('home')}
                                </Link>
                            </li>
                            <li className="leading-[35px]">
                                <Link
                                    className={cn('nav no-underline text-sm font-[500] uppercase', activeMenu.includes('aboutUs') && 'active')}
                                    href="/about-us"
                                >
                                    {t('aboutUs')}
                                </Link>
                            </li>
                            <li className="leading-[35px]">
                                <Link
                                    className={cn('nav no-underline text-sm font-[500] uppercase', activeMenu.includes('ourTeam') && 'active')}
                                    href="/our-team"
                                >
                                    {t('certifications')}
                                </Link>
                            </li>
                            <li className="leading-[35px]">
                                <div
                                    className={cn(
                                        'nav no-underline text-sm font-[500] uppercase cursor-pointer',
                                        activeMenu.includes('products') && 'active'
                                    )}
                                >
                                    <Dropdown menu={{ items }} arrow overlayClassName="w-[250px]">
                                        <span className="align-middle">
                                            {t('products')}
                                            <AiFillCaretDown className="ml-[6px] text-[12px]" />
                                        </span>
                                    </Dropdown>
                                </div>
                            </li>
                            <li className="leading-[35px]">
                                <Link
                                    className={cn('nav no-underline text-sm font-[500] uppercase', activeMenu.includes('contactUs') && 'active')}
                                    href="/contact-us"
                                >
                                    {t('contactUs')}
                                </Link>
                            </li>
                            <li className="leading-[35px] flex items-center">
                                <LanguageSwitcher />
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center lg:hidden" onClick={() => setOpen(true)}>
                        <RxHamburgerMenu className="text-white text-[30px] cursor-pointer" />
                    </div>
                </div>
            </div>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                headerStyle={{ borderBottom: '0px' }}
                placement="left"
                rootClassName="lg:hidden"
                width={300}
            >
                <ul className="list-none">
                    <li className="leading-[25px] mt-4">
                        <Link
                            className={cn('nav mobile no-underline text-sm font-[500] uppercase', activeMenu.includes('home') && 'active')}
                            href="/"
                        >
                            {t('home')}
                        </Link>
                    </li>
                    <li className="leading-[25px] mt-4">
                        <Link
                            className={cn(
                                'nav mobile no-underline text-sm font-[500] uppercase !font-roboto',
                                activeMenu.includes('aboutUs') && 'active'
                            )}
                            href="/about-us"
                        >
                            {t('aboutUs')}
                        </Link>
                    </li>
                    <li className="leading-[25px] mt-4">
                        <Link
                            className={cn('nav mobile no-underline text-sm font-[500] uppercase', activeMenu.includes('ourTeam') && 'active')}
                            href="/our-team"
                        >
                            {t('ourTeam')}
                        </Link>
                    </li>
                    <li className="leading-[25px] mt-4">
                        <div
                            className={cn(
                                'nav mobile no-underline text-sm font-[500] uppercase inline cursor-pointer',
                                activeMenu.includes('products') && 'active'
                            )}
                        >
                            {t('products')}
                        </div>
                        <div className="ml-5 text-gray-400">
                            <ul className="list-none">
                                <li className="leading-[20px] mt-3">
                                    <Link
                                        className={cn(
                                            'subNav mobile no-underline text-xs font-[500] uppercase',
                                            activeMenu.includes('customerRelationshipManagementSystem') && 'active'
                                        )}
                                        href="/product/customer-relationship-management-system"
                                    >
                                        {t('customerRelationshipManagementSystem')}
                                    </Link>
                                </li>
                                <li className="leading-[20px] mt-3">
                                    <Link
                                        className={cn(
                                            'subNav mobile no-underline text-xs font-[500] uppercase',
                                            activeMenu.includes('projectManagementSystem') && 'active'
                                        )}
                                        href="/product/project-management-system"
                                    >
                                        {t('projectManagementSystem')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="leading-[25px] mt-4">
                        <Link
                            className={cn('nav mobile no-underline text-sm font-[500] uppercase', activeMenu.includes('contactUs') && 'active')}
                            href="/contact-us"
                        >
                            {t('contactUs')}
                        </Link>
                    </li>

                    <li className="leading-[25px] mt-4">
                        <div className={cn('nav mobile no-underline text-sm font-[500] uppercase inline cursor-pointer')}>{t('languages')}</div>
                        <div className="flex items-center mt-2 ml-3 ">
                            <LanguageSwitcher width="100%" />
                        </div>
                    </li>
                </ul>
            </Drawer>
        </header>
    );
};

export default Header;
