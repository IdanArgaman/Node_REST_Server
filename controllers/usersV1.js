import { User } from "../models";

export const getUsers = async (req, res) => {
    const users = await new User().getUsers();
    res.json(users);
};
