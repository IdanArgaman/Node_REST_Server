import { ServerConfig } from "./config";
import { routerV1, routerV2, redirectRouter } from "./routes";

function main() {
    const PORT = process.env.PORT || 3000;
    const server = new ServerConfig({
        port: PORT,
        // middleware: [],
        routers: [redirectRouter, routerV1, routerV2, /* authRouter, routerV2Docs */ ]

    });

    server.listen();
}

main();