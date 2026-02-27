import { Request, Response } from "express";
import User from "../models/User";

class UsersController {

    static async findAll(req: Request, res: Response) {
        const users = await User.findAll();

        res.send(users);
    }

    static async getById(req: Request, res: Response) {
        console.log('paramestros do request', req.params);
        const { id } = req.params;
        const user = await User.findByPk(Number(id));

        res.send(user);
    }

}

export default UsersController;