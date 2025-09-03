import { assertEquals } from "@std/assert";
import { HealthController } from "./health.controller.ts";

Deno.test('HeahlController', async (test) => {
    const controller = new HealthController();

    await test.step('Check status up', () => {
        const result = controller.getStatus();

        assertEquals(result, { status: 'UP'});
    });
});
