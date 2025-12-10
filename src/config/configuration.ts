export default () => ({
  ENVIRONMENT: process.env.ENVIRONMENT,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
});
