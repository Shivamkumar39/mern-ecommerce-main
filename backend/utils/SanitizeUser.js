// backend/utils/SanitizeUser.js
exports.sanitizeUser = (user) => {
  if (!user) {
    console.error("sanitizeUser: user is null or undefined");
    return null; // Prevents crash
  }

  return {
    _id: user._id,
    email: user.email,
    isVerified: user.isVerified,
    isAdmin: user.isAdmin,
  };
};
