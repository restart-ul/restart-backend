module.exports = ({env}) => {
  return {
    host: env('HOST', '0.0.0.0'),
    port: 1337,
    url: 'http://localhost:1337/',
    app: {
      keys: env.array('APP_KEYS', ['testKey1', 'testKey2']),
    },
  };
};
