module.exports = ({env}) => {
  console.log('env', env('STRAPI_ENDPOINT', 'http://127.0.0.1:1337'));

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env('STRAPI_ENDPOINT', 'http://127.0.0.1:1337'),
    app: {
      keys: env.array('APP_KEYS', ['testKey1', 'testKey2']),
    },
  };
};
