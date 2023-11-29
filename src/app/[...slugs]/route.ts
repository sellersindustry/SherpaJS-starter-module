import { SherpaServer } from "@/core";
import { config } from "../../../sherpa.config";

export const dynamic = "force-dynamic";

export async function GET(request:Request) {
    return await (new SherpaServer(config)).process(request);
}

export async function PUT(request:Request) {
    return await (new SherpaServer(config)).process(request);
}

export async function POST(request:Request) {
    return await (new SherpaServer(config)).process(request);
}

export async function PATCH(request:Request) {
    return await (new SherpaServer(config)).process(request);
}

export async function DELETE(request:Request) {
    return await (new SherpaServer(config)).process(request);
}
