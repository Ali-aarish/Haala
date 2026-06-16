// DB config — Demo
// In a real app this would connect to MongoDB/Postgres.
// Here it just logs a friendly message so the demo stays DB-free.

function connectDB() {
  console.log("✅ Haala demo DB connected (in-memory sample data)");
}

module.exports = connectDB;
