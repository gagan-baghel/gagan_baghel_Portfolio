export default function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gaganbaghel.com';

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/project`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
}
