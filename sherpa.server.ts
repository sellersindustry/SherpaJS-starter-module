/**
 * This file is not required to create a SherpaJS module.
 * Only needed to run server locally
 */

import { SherpaJS } from "sherpa-core";
import { Config } from "./sherpa.module";


export default SherpaJS.New.server<Config>({
    context: {
        exampleProperty: "hello world"
    }
});
