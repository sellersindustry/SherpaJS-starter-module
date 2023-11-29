import { Module } from "./module";

export type Config = {
    modules: {
        [slug:string]:Module
    }
}

