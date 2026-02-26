import { Request, Response } from "express";
import User from "../models/User";

class UsersController {

    static async list(req: Request, res: Response) {
        const users = await User.findAll();

        res.send(users);
    }

}

export default UsersController;