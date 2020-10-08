<<<<<<< Updated upstream
import express, { Response, Request, NextFunction } from 'express';
=======
import express, { Response, Request } from 'express';
>>>>>>> Stashed changes
import morgan from 'morgan';
import * as bodyParser from 'body-parser';

import { ServConf } from '../models/conf.model';
<<<<<<< Updated upstream
import { Db } from '../db/db';
=======
>>>>>>> Stashed changes

export class Server {

    /* Server conf. */
    conf: ServConf;

    /* The Express app. */
    app;

<<<<<<< Updated upstream
    /* The db client */
    db: Db;

=======
>>>>>>> Stashed changes
    /**
     * Constructor.
     * @param conf Server config
     */
<<<<<<< Updated upstream
    constructor(conf: ServConf, db: Db) {
        this.conf = conf;
        this.app = express();
        this.db = db;
=======
    constructor(conf: ServConf) {
        this.conf = conf;
        this.app = express();

>>>>>>> Stashed changes
        this.initMiddleware();
        this.initRoutes();
    }

    /**
     * Initialising the server.
     */
    initServer(): Promise<void> {
        return new Promise((resolve) => {
            this.app.listen(this.conf.port, () => {
                // tslint:disable-next-line:no-console
                console.log(`server started at http://localhost:${this.conf.port}`);
                resolve();
            });
        });
    }

    /**
     * Initilising all the routers and routes.
     */
    initRoutes() {
        this.app.get('/', (req: Request, res: Response) => {
            return res.send('Hello World');
        })
    }

    /**
     * Initialising middleware.
     */
    initMiddleware() {
        this.app.use(morgan('tiny'));
        this.app.use(bodyParser.json());

<<<<<<< Updated upstream
        // Injecting the database into each request
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.locals.db = this.db;
            next();
        })
=======
>>>>>>> Stashed changes
    }
}

