import express, { Request, Response, Router } from 'express';
import UsersController from './controllers/users.controller';

const app = express();
app.use(express.json());

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send("Hello World (typescript)");
});

router.get('/users', UsersController.list);

app.use(router);

export default app;