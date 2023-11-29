import RouteRecognizer from "route-recognizer";
import { Handler, Method, Path } from "./model";

export class RouterMaster {

    private routes:Record<Method, RouteRecognizer>;

    constructor() {
        this.routes = {
            [Method.Get]: new RouteRecognizer(),
            [Method.Put]: new RouteRecognizer(),
            [Method.Post]: new RouteRecognizer(),
            [Method.Patch]: new RouteRecognizer(),
            [Method.Delete]: new RouteRecognizer()
        }
    }

    public add(path:Path, handler:Handler, method:Method) {
        this.routes[method].add([{
            path: path,
            handler: handler
        }]);
    }

    public async process(request:Request):Promise<Response> {
        let path  = new URL(request.url).pathname;
        let route = this.routes[request.method as Method].recognize(path);
        if (!route || route.length == 0 || !route[0]?.handler)
            return new Response(undefined, { status: 404 });
        // @ts-ignore
        return await route[0].handler(request, route[0].params);
    }

}
