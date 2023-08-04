import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { FloatButton } from 'antd';
import { WhatsAppOutlined, CommentOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, PlusOutlined } from '@ant-design/icons';
import { NextSeo } from 'next-seo';
interface LayoutProps {
    children: ReactNode;
    activeMenu: string[];
    seoConfig?: any;
}

const Layout: React.FC<LayoutProps> = ({ children, activeMenu, seoConfig }) => {
    return (
        <div>
            <NextSeo {...seoConfig} />
            <Header activeMenu={activeMenu} />
            <main className="mt-[80px]" style={{ minHeight: 'calc(100vh - 80px)' }}>
                {children}
            </main>
            <FloatButton icon={<WhatsAppOutlined />} className="whatsApp" href="https://wa.me/60123090314" target="_blank" />
            <Footer />
        </div>
    );
};

export default Layout;
