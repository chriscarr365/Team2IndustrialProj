import express, { Response, Request } from 'express';
import morgan from 'morgan';
import * as bodyParser from 'body-parser';

import { ServConf } from '../models/conf.model';

export class Server {

    /* Server conf. */
    conf: ServConf;

    /* The Express app. */
    app;

    /**
     * Constructor.
     * @param conf Server config
     */
    constructor(conf: ServConf) {
        this.conf = conf;
        this.app = express();

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

    }
}

