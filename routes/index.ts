import { Request, Environment as Env, Response } from "sherpa-core";


export function GET(request:Request, env:Env) {
    return Response({
        "url": request.url,
        "method": request.method,
        "moduleID": env.GetModuleID(),
        "moduleName": env.GetModuleConfig()["name"],
        "properties": env.GetProperties()["exampleProperty"],
        "server": env.GetServerConfig()
    }, {
        "status": 200
    });
}


export function POST(request:Request, env:Env) {
    return Response("POST REQUEST");
}



export function PATCH(request:Request, env:Env) {
    return Response("PATCH REQUEST");
}



export function DELETE(request:Request, env:Env) {
    return Response("DELETE REQUEST");
}
