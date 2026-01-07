import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
    // This simple configuration provides messages for the default locale 'en'.
    // To support multiple locales via URL (e.g. /sv), the app structure needs to be
    // updated to use a [locale] folder, which is a larger refactor.
    const locale = 'en';

    return {
        locale,
        messages: (await import(`./translations/home/${locale}.json`)).default
    };
});
