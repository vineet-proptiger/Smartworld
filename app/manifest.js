export default function manifest() {
  return {
    name: 'Eldeco Terra & Sol',
    short_name: 'Eldeco Terra',
    description: 'Luxury Apartments in Gurgaon',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a1a1a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
