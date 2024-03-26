/**
 * This file is not required to create a SherpaJS module.
 * Only needed to run server locally
 */

import { SherpaJS } from "sherpa-core";
import { ContextSchema } from "./sherpa.module";


export default SherpaJS.New.server({
    context: {
        exampleProperty: "f"
    } as ContextSchema
});
