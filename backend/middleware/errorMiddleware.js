// Error middleware — Demo
// Catches errors and returns a clean JSON message.

module.exports = function errorMiddleware(err, req, res, next) {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong",
  });
};
