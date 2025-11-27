import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../services/userServices.js';

export const create = async (req, res) => {
    try {
        const user = await createUser(req.body);
        //trả về HTTP 201 Created và data
        res.status(201).json({
            message: 'User created successfully',
            data: user
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//[GET] GET ALL USERS
export const getAll = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//[GET] GET USER BY ID
export const getById = async (req, res) => {
    try {
        const user = await getUserById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({
            message: 'User retrieved successfully',
            data: user
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//[PUT] UPDATE USER
export const update = async (req, res) => {
    try {
        const user = await updateUser(req.params.userId, req.body);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({
            message: 'User updated successfully',
            data: user
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//[DELETE] DELETE USER
export const remove = async (req, res) => {
    try {
        const user = await deleteUser(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({
            message: 'User deleted successfully',
            data: user
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
