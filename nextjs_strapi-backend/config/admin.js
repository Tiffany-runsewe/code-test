module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '562a414e8655b4a0bbb7c6f7b14d8315'),
  },
});
