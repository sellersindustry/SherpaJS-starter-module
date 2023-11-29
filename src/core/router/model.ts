
export enum Method {
    Get="GET",
    Post="POST",
    Patch="PATH",
    Delete="DELETE"
}

export type Path = string;
export type Paramaters = { [key:string]: string }
export type Handler = (params:Paramaters, request:Request) => Promise<Response>|Response;
