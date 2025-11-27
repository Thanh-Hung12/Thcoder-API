import User from '../models/userModels.js';
export const createUser = async (userData) => {
   const user = new User(userData);
   return await user.save();
};
// lấy tất cả user
export const getAllUsers = async () => {
    return await User.find();
};
//lấy 1 user theo ID
export const getUserById = async (userId) => {
    return await User.findById(userId);
};
// cập nhập user
export const updateUser = async (userId, userData) => {
    return await User.findByIdAndUpdate(userId, userData, { new: true });
};
// xóa user
export const deleteUser = async (userId) => {
    return await User.findByIdAndDelete(userId);
};