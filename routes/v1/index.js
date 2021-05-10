import { Router } from "express";

import setContactsV1 from "./contactsV1";
import setUsersV1 from "./usersV1";

const router = Router();

// Augment the router with contacts end points
setContactsV1(router);
setUsersV1(router);

export const routerV1 = {
    baseUrl: "/api/v1",
    router
};