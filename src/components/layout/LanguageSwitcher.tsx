import { Select } from 'antd';
import { PLATFORM_LOCALE } from '@/const';
import { useRouter } from 'next/router';

interface LanguageSwitcherProps {
    width?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ width = 130 }) => {
    const router = useRouter();
    const locale = !router.locale || !PLATFORM_LOCALE.includes(router.locale) ? 'en-GB' : router.locale;

    const onLocaleChangeHandler = (locale: string) => {
        if (!PLATFORM_LOCALE.includes(locale)) {
            router.push(router.pathname, router.pathname, { locale: 'en-GB' });
        }
        router.push(router.pathname, router.pathname, { locale });

        router.events.on('routeChangeComplete', () => {
            router.reload();
        });
    };

    return (
        <Select bordered={false} defaultValue={locale} value={locale} style={{ width }} onChange={onLocaleChangeHandler}>
            <Select.Option value="en-GB">
                <div className="flex items-center">
                    <img src="/flags/united-states.png" alt="United States Flag" className="w-[17px]" />
                    <span className="ml-2">English</span>
                </div>
            </Select.Option>
            <Select.Option value="zh-CN">
                <div className="flex items-center">
                    <img src="/flags/china.png" alt="China Flag" className="w-[17px]" />
                    <span className="ml-2">简体中文</span>
                </div>
            </Select.Option>
        </Select>
    );
};

export default LanguageSwitcher;
