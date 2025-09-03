export const createHealthController = (): HealthController => {
    return new HealthController();
};

type HealthResponse = {
    status: string
}

export class HealthController {

    constructor() {}

    getStatus(): HealthResponse {
        return { status: "UP" };
    }
}