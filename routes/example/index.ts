import { Request, Environment as Env, Response } from "sherpa-core";


export function GET(request:Request, env:Env) {
    return Response({
        "url": request.url,
    }, {
        "status": 200,
        "headers": {
            "Content-Type": "application/json",
        }
    });
}

