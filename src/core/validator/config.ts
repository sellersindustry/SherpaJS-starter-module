import { Config } from "../model/config";



export class ValidatorConfig {


    public static Process(config:Config):string[] {
        let errors:string[] = [];
        errors.push(...this.ModuleSlugs(config));
        return errors;
    }


    private static ModuleSlugs(config:Config):string[] {
        let errors:string[] = [];
        Object.keys(config.modules).forEach((slug) => {
            if (!slug.match(/^[A-Za-z0-9\-]*$/)) {
                errors.push(`Error - Module slug "${slug}" is invalid. `
                    + `Slugs may only contain letters, digits, and dashes.`);
            }
        });
        return errors;
    }


}

