/* Sherpa Config File */
import { Config } from "@/core"
import TemplateModule from "@/modules/template";

export const config:Config = {
    modules: {
        "test": new TemplateModule()
    }
};
