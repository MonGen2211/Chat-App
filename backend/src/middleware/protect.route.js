export const protectRoute = async (req, res, next) => {
  const jwt = req.cookies.jwt;
  if (!jwt) {
    return res.status(400).json({ message: "You need to Login first" });
  }
  next();
};
