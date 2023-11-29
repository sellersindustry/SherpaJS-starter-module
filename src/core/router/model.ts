
export enum Method {
    Get="GET",
    Put="PUT",
    Post="POST",
    Patch="PATH",
    Delete="DELETE"
}

export type Path = string;
export type Paramaters = { [key:string]: string }
export type Handler = (request:Request, params:Paramaters) => Promise<Response>|Response;
