import { spy } from "@std/testing/mock";

export const loggerMock = {
    info: spy((value: any): void => {}),
    warn: spy((value: any): void => {}),
    error: spy((value: any): void => {})
};