import { Router } from "../router/router-sub";

export interface Module {
    routes(router:Router):void;
}
