module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://confident-book-2bd9a84a38.strapiapp.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://confident-book-2bd9a84a38.strapiapp.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://laabejitamanufactura.vercel.app',
        'http://localhost:3000',
        /\.vercel\.app$/, // 🔥 clave para previews de Vercel
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
        'X-Requested-With',
      ],
      credentials: true, // 🔥 importante
    },
  },
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
