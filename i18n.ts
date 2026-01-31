import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
    // This simple configuration provides messages for the default locale 'en'.
    // To support multiple locales via URL (e.g. /sv), the app structure needs to be
    // updated to use a [locale] folder, which is a larger refactor.
    const locale = 'en';

    let messages = {};
    try {
        const homeMessages = (await import(`./translations/home/${locale}.json`)).default;
        const securityMessages = (await import(`./translations/website-security/${locale}.json`)).default;
        const patchmanMessages = (await import(`./translations/patchman/${locale}.json`)).default;
        const managedServerMessages = (await import(`./translations/managed-server/${locale}.json`)).default;
        const productsMessages = (await import(`./translations/products/${locale}.json`)).default;
        const vpsMessages = (await import(`./translations/vps/${locale}.json`)).default;
        const domainMessages = (await import(`./translations/domain/${locale}.json`)).default;
        const hostingMessages = (await import(`./translations/shared-hosting/${locale}.json`)).default;
        const anonymousHostingMessages = (await import(`./translations/anonymous-hosting/${locale}.json`)).default;
        const vpnMessages = (await import(`./translations/vpn/${locale}.json`)).default;
        const sslMessages = (await import(`./translations/ssl/${locale}.json`)).default;
        const krakenSecureWebMessages = (await import(`./translations/kraken-secure-web/${locale}.json`)).default;

        // Legal translations
        const termsMessages = (await import(`./translations/terms/${locale}.json`)).default;
        const aupMessages = (await import(`./translations/aup/${locale}.json`)).default;
        const slaMessages = (await import(`./translations/sla/${locale}.json`)).default;
        const privacyMessages = (await import(`./translations/privacy/${locale}.json`)).default;
        const copyrightMessages = (await import(`./translations/copyright/${locale}.json`)).default;

        // About Us
        const aboutMessages = (await import(`./translations/about-us/${locale}.json`)).default;
        const contactMessages = (await import(`./translations/contact/${locale}.json`)).default;
        const navbarMessages = (await import(`./translations/navbar/${locale}.json`)).default;
        const footerMessages = (await import(`./translations/footer/${locale}.json`)).default;

        messages = {
            ...homeMessages,
            ...securityMessages,
            ...patchmanMessages,
            ...managedServerMessages,
            ...productsMessages,
            ...vpsMessages,
            ...domainMessages,
            ...hostingMessages,
            ...anonymousHostingMessages,
            ...vpnMessages,
            ...sslMessages,
            ...krakenSecureWebMessages,
            ...termsMessages,
            ...aupMessages,
            ...slaMessages,
            ...privacyMessages,
            ...copyrightMessages,
            ...aboutMessages,
            "Contact": contactMessages,
            "Navbar": navbarMessages,
            "Footer": footerMessages
        };
    } catch (error) {
        console.error("Failed to load messages", error);
    }

    return {
        locale,
        messages
    };
});
