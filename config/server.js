module.exports = ({env}) => {
  const config = {
    host: env('HOST', '0.0.0.0'),
    port: 1337,
    url: 'http://127.0.0.1',
    app: {
      keys: env.array('APP_KEYS', ['testKey1', 'testKey2']),
    },
  };

  return config;
};
