import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTranslation, appWithTranslation } from 'next-i18next';
import NextNProgress from 'nextjs-progressbar';
import { useEffect, useState } from 'react';
import { ConfigProvider, theme } from 'antd';

const roboto = Poppins({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});

const useIsMounted = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, 250);
    }, []);
    return isMounted;
};

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
});

function App({ Component, pageProps }: AppProps) {
    const { darkAlgorithm } = theme;
    return (
        <QueryClientProvider client={queryClient}>
            <ConfigProvider
                theme={{
                    algorithm: darkAlgorithm,
                    token: {
                        fontFamily: roboto.style.fontFamily,
                    },
                }}
            >
                <main style={{ visibility: !useIsMounted() ? 'hidden' : 'visible' }}>
                    <NextNProgress />
                    <Component {...pageProps} />
                </main>
            </ConfigProvider>
        </QueryClientProvider>
    );
}

export default appWithTranslation(App);
