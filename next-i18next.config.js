module.exports = {
    i18n: {
        defaultLocale: 'en-GB',
        locales: ['en-GB', 'zh-CN'],
    },
    fallbackLng: {
        // if chinese language detected, fallback to zh-HK
        'zh-CN': ['zh'],
        // if english language detected, fallback to en-GB
        'en-GB': ['en'],
    },
    react: { useSuspense: false },
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    keySeparator: '.',
};
