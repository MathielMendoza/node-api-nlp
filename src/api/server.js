import express from "express";

class Server {
    constructor({config, router}) {
        this._config = config;
        this._express = express();
        this._express.use(router);
    }

    start() {
        return new Promise((resolve, reject) => {
            const http = this._express.listen(this._config.PORT, () => {
                const {port} = http.address();
                console.log('Application running on PORT ',{port});
                resolve();
            });
        });
    }
}
export default Server;