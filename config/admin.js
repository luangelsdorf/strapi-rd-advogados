module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1d42f3113d8dc1011ab01afe84fdc525'),
  },
});
