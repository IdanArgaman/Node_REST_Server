import { mkDB } from './generate';
const jsonServer = require('json-server')

export default class JsonServerConfig {
    constructor({  port = 5001, makeDb = 100 }) {
        this.makeDb = makeDb;
        this.port = port;
        this.server = jsonServer.create()
        this.router = jsonServer.router('db.json')
        this.middlewares = jsonServer.defaults()
    }

    generateData() {
        mkDB(this.makeDb);
        return this;
    }

    listen() {
        try {
            this.server.use(this.middlewares);
            this.server.use(this.router);
            this.server.listen(this.port, () => {
                console.log(`Json server is listening on port: ${this.port}`);
            });

        } catch (error) {
            console.error(`Json server error: ${error.message}`);
        }
    }   
}


