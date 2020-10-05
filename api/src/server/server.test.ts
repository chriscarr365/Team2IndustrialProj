import { expect } from 'chai';
import { agent as request } from 'supertest';

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
    });
});
