"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express = require("express");
require("express-async-errors");
const cors = require("cors");
// import userRouter from './routes/user.routes';
// import teamRouter from './routes/team.routes';
// import matchRouter from './routes/match.routes';
// import loginRouter from './routes/login.routes';
// import leaderBoardRouter from './routes/leaderBoard.routes';
const AppResponseError_1 = require("./AppResponseError");
class App {
    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(express.json());
        // this.routes();
        this.config();
        // Não remover essa rota
        //this.app.get('/', (_req, res) => {throw new Error('fdjsl')});//res.json({ ok: true }));
        this.app.get('/', (_req, res) => res.json({ ok: true }));
        this.app.use((err, _req, res, _n) => {
            if (err instanceof AppResponseError_1.default) {
                return res.status(err.statusCode).json({ message: err.message });
            }
            return res.status(500).json({ message: 'Erro não tratado.', messageError: err.message });
        });
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(accessControl);
    }
    // private routes(): void {
    //   this.app.use('/users', userRouter);
    //   this.app.use('/teams', teamRouter);
    //   this.app.use('/matches', matchRouter);
    //   this.app.use('/login', loginRouter);
    //   this.app.use('/leaderboard', leaderBoardRouter);
    // }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.App = App;
// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
exports.app = new App().app;
//# sourceMappingURL=app.js.map