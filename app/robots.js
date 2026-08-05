export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'http://smartworldsector67a.com/sitemap.xml',
  }
}
