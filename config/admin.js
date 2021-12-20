module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '96a16211f6fc1ad026755ce605f3f986'),
  },
});
