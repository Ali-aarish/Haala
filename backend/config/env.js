// Env config — Demo
// Central place for environment variables (with demo defaults).

module.exports = {
  PORT: process.env.PORT || 5000,
  DB_URL: process.env.DB_URL || "mongodb://localhost:27017/haala",
  JWT_SECRET: process.env.JWT_SECRET || "haala-demo-secret",
};
