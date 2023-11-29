import { Handler, Method, Path } from "./model";
import urlJoin from "proper-url-join";
import { RouterMaster } from "./router-master";

export class Router {

    private masterRouter:RouterMaster;
    private subpath:Path|undefined;

    constructor (router:RouterMaster, subpath?:Path) {
        this.masterRouter = router;
        this.subpath      = subpath;
    }

    public add(path:Path, handler:Handler, method:Method) {
        this.masterRouter.add(this.addSubpath(path), handler, method);
    }

    public get(path:Path, handler:Handler) {
        this.add(path, handler, Method.Get);
    }

    public put(path:Path, handler:Handler) {
        this.add(path, handler, Method.Put);
    }

    public post(path:Path, handler:Handler) {
        this.add(path, handler, Method.Post);
    }

    public patch(path:Path, handler:Handler) {
        this.add(path, handler, Method.Patch);
    }

    public delete(path:Path, handler:Handler) {
        this.add(path, handler, Method.Delete);
    }

    private addSubpath(path:Path):Path {
        if (!this.subpath) return path;
        return urlJoin(this.subpath, path);
    }

}
