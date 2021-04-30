import { Router } from "express";

import setContactsV1 from "./contactsV1";

const router = Router();

// Augment the router with contacts end points
setContactsV1(router);

export const routerV1 = {
    baseUrl: "/api/v1",
    router
};