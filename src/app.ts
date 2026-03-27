import express, { Request, Response, Router } from 'express';
import UsersController from './controllers/users.controller';
import MoviesController from './controllers/movies.controller';
import ActorsController from './controllers/actors.controller';
import GenresController from './controllers/genres.controller';
import AuthController from './controllers/auth.controller';
import "dotenv/config";
import authMiddleware from './middlewares/auth.middleware';

const app = express();
app.use(express.json());

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send("Hello World (typescript)");
});

// rotas de usuários
router.get('/users', authMiddleware, UsersController.findAll);
router.post('/users', UsersController.create);
router.get('/users/:id', authMiddleware, UsersController.getById);
router.delete('/users/:id', authMiddleware, UsersController.remove);
router.put('/users/:id', authMiddleware, UsersController.update);

// rotas de filmes
router.get('/movies', MoviesController.findAll);
router.post('/movies', MoviesController.create);
router.get('/movies/:id', MoviesController.getById);
router.delete('/movies/:id', MoviesController.remove);
router.put('/movies/:id', MoviesController.update);

// rotas de atores
router.get('/genres', GenresController.findAll);
router.post('/genres', GenresController.create);
router.get('/genres/:id', GenresController.getById);
router.delete('/genres/:id', GenresController.remove);
router.put('/genres/:id', GenresController.update);

// rotas de atores
router.get('/actors', ActorsController.findAll);
router.post('/actors', ActorsController.create);
router.get('/actors/:id', ActorsController.getById);
router.delete('/actors/:id', ActorsController.remove);
router.put('/actors/:id', ActorsController.update);

// rota de autenticação
router.post('/login', AuthController.login);

app.use(router);

export default app;