import dotenv from 'dotenv';

import { Server } from './server/server';

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;


const server = new Server({port});

server.initServer();