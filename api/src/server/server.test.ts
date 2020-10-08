import { expect } from 'chai';
import { agent as request } from 'supertest';
<<<<<<< Updated upstream
import dotenv from 'dotenv';


/*tslint:disable: no-unused-expression */

xdescribe('Server Test', () => {

    // let server: Server;
    // let db;

    before((done) => {

        dotenv.config();

        // const dbConnectionOptions: ConnectionOptions = {
        //     host: process.env.DB_HOST,
        //     port: Number(process.env.DB_PORT),
        //     database: process.env.DB_NAME,
        //     user: process.env.DB_USER,
        //     password: process.env.DB_PASS,
        // }
        // db = new

        //     server = new Server({ port: '9999' }, mockDb);
        // server.initServer().then(() => {
        //     done();
        // });
    });

    it('should GET /', async () => {
        // const res = await request(server.app)
        //     .get('/');

        // expect(res.status).to.equal(200);
        // expect(res.text).not.to.be.empty;
        // expect(res.text).to.be.equal('Hello World');
=======

import { Server } from './server';

/*tslint:disable: no-unused-expression */

describe('Server Test', () => {

    let server: Server;

    before((done) => {
        server = new Server({ port: '9999' });
        server.initServer().then(() => {
            done();
        });
    });

    it('should GET /', async () => {
        const res = await request(server.app)
            .get('/');

        expect(res.status).to.equal(200);
        expect(res.text).not.to.be.empty;
        expect(res.text).to.be.equal('Hello World');
>>>>>>> Stashed changes
    });
});
