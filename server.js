import { ServerConfig, JsonServerConfig } from "./config";
import { routerV1, routerV2, redirectRouter } from "./routes";
import { ConfigService } from "./services";

import dotenv from 'dotenv';
dotenv.config();

function main() {
    const PORT = ConfigService.get(ConfigService.KEYS.PORT) || 3000;

    new JsonServerConfig({}).listen();

    const server = new ServerConfig({
        port: PORT,
        // middleware: [],
        routers: [redirectRouter, routerV1, routerV2, /* authRouter, routerV2Docs */ ]
    });

    server.listen();
}

main();
