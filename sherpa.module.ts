import { ContextSchema, SherpaJS } from "sherpa-core";


export type Config = {
    exampleProperty: string
};


export default SherpaJS.New.module({
    name: "template_name",
    interface: ContextSchema<Config>
});

