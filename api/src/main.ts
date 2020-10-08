import dotenv from 'dotenv';
<<<<<<< Updated upstream
import { ConnectionOptions } from 'mysql';

import { Server } from './server/server';
import { Db } from './db/db';

dotenv.config();

const port = process.env.SERVER_PORT;

const dbConnectionOptions: ConnectionOptions = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
}



const dbClient = new Db(dbConnectionOptions);
dbClient.initClient().then(() => {
    const server = new Server({ port }, dbClient);
    server.initServer();
}).catch(err => {
    // tslint:disable-next-line: no-console
    console.error(err);
});

=======

import { Server } from './server/server';

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;


const server = new Server({port});

server.initServer();
>>>>>>> Stashed changes
