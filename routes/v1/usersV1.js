import { usersV1 as v1 } from "../../controllers";
import { AsyncWrapper } from "../../utils";

export default router => {
    router.get("/users", AsyncWrapper(v1.getUsers));
};