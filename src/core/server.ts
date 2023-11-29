import { Config } from "./model/config";
import { RouterMaster } from "./router/router-master";
import { Router } from "./router/router-sub";
import { Validator } from "./validator";


export class SherpaServer {

    private config:Config;
    private router:RouterMaster;

    constructor (config:Config) {
        this.config = config;
        this.router = new RouterMaster();
        this.validateConfig();
        this.addModules();
        this.addRoot();
    }

    public process(request:Request) {
        this.router.process(request);
    }

    private validateConfig() {
        let errors = Validator.Config.Process(this.config);
        if (errors.length == 0) return;
        console.log("=============== Sherpa Config Error ===============");
        errors.forEach((error) => console.error(error));
        throw new Error("Sherpa Config Error - See logs for more info");
    }

    private addModules() {
        Object.entries(this.config.modules).forEach(([slug, module]) => {
            module.routes(new Router(this.router, slug));
        });
    }

    private addRoot() {
        //! Add Root HTML Page
    }

}

