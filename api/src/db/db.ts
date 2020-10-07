import { createConnection, Connection, ConnectionOptions } from 'mysql';

export class Db {
    conn: Connection;

    /**
     * Constructor.
     * @param dbConf Mysql Connection Options
     */
    constructor(dbConf: ConnectionOptions) {
        this.conn = createConnection(dbConf);


    }

    /**
     * Initilises the mysql db connection.
     */
    initClient() {
        return new Promise((resolve, reject) => {
            this.conn.connect((err: Error) => {
                if (err) reject(err);
                resolve('Db Connected');
            });
        });

    }
}