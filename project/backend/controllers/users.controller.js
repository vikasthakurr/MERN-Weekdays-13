import asyncHandler from "../utils/asynchandler.utils.js";

export const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "user updated" });
});

export const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "user deleted" });
});

export const getAllUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "all users" });
});

export const usersController = {
  updateUser,
  deleteUser,
  getAllUsers,
};
