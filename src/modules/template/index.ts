import { Module, Paramaters, Router } from "@/core";


export default class TemplateModule implements Module {

    routes(router: Router) {
        router.get("/foo", (req:Request, params:Paramaters) => {
            return new Response("Hello World!");
        });

        router.get("/foo/:id", (req:Request, params:Paramaters) => {
            return new Response(`Hello World ${params.id}!`);
        });
    }

}
