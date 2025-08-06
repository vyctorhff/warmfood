import { Logger } from "../../core/usercase/logger.ts";

export const createLogger = (value: string): Logger => {
    return new LoggerConsole(value);
}

export const createLoggerClass = (clazz: ClassDecorator): Logger => {
    return new LoggerConsole(clazz.name);
};

export class LoggerConsole implements Logger {

    constructor(private target: string) {}

    info(value: any) {
        // const content = `${this.target} - ${value}`
        // console.info(`[INFO]: ${content}`, `color: white; ${this.styleWeight}`);
        this.log('INFO', value, 'white');
    }

    warn(value: any) {
        // const content = `${this.target} - ${value}`
        // console.info(`[WARN]: ${content}`, `color: yellow; ${this.styleWeight}`);
        this.log('WARN', value, 'yellow');
    }

    error(value: any) {
        // const content = `${this.target} - ${value}`
        // console.info(`[ERROR]: ${content}`, `color: red; ${this.styleWeight}`);
        this.log('ERROR', value, 'red');
    }

    private log(type: string, value: string, color: string) {
        const content = `${this.target} - ${value}`
        const style = `color: ${color}; font-weight: bold`;

        console.log(`[${type}]: ${content}`, style);
    }
}