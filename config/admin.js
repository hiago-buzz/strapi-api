module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c41c117f94f8e8a18f0d826c7029f849'),
  },
});
