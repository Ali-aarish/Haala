// Auth middleware — Demo
// Very basic demo token check (no real JWT verification).

module.exports = function authMiddleware(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.replace("Bearer ", "");

  // Demo: any token starting with "haala-" is accepted
  if (!token.startsWith("haala-")) {
    return res.status(401).json({ message: "Unauthorized — demo token required" });
  }

  req.user = { token }; // attach a fake user for downstream handlers
  next();
};
