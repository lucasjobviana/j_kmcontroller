import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import * as cors from 'cors';
import userRouter from './routes/user.routes';
import loginRouter from './routes/login.routes';
import fleetRouter from './routes/fleet.routes';
import serviceTaskRouter from './routes/serviceTask.routes';
import workShop from './routes/workShop.routes';
import maintenance from './routes/maintenance.routes';
import AppResponseError from './AppResponseError';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
    this.routes();


    this.config();

    // Não remover essa rota
    //this.app.get('/', (_req, res) => {throw new Error('fdjsl')});//res.json({ ok: true }));
    this.app.get('/', (_req, res) => res.json({ ok: true }));

    this.app.use((err:AppResponseError | Error, _req:Request, res: Response, _n:NextFunction) => {
      console.log('Middleware de erro');
      console.log(err);
      console.log('________');
      if (err instanceof AppResponseError) {
        return res.status(err.statusCode).json({ message: err.message });
      }

      return res.status(500).json({ message: 'Erro não tratado.', messageError: err.message });
    });
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
  }

  private routes(): void {
    this.app.use('/users', userRouter);
    this.app.use('/login', loginRouter);
    this.app.use('/fleet',fleetRouter);
    this.app.use('/services',serviceTaskRouter);
    this.app.use('/workshop',workShop);
    this.app.use('/maintenance',maintenance);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// export by test
export const { app } = new App();