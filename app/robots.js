export default function robots() {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gaganbaghel.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
