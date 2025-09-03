import { assertEquals } from "@std/assert";
import { assertSpyCalls, spy } from "@std/testing/mock";

import { UserController } from "./user.controller.ts";
import { User } from "../../../core/domain/user.domain.ts";

Deno.test('UserController', async (test) => {

    const getUserUserCaseMock = {
        getByEmail: spy((email: string): Promise<User> => {
            return Promise.resolve({
                name: 'mock',
                email: 'mock@mock.com',
                dateCreated: new Date()
            });
        }),
    };

    const controller = new UserController(getUserUserCaseMock);

    await test.step('GetByEmail passing the email', async () => {
        const result = await controller.getByEmail('test@test.com');

        assertEquals('mock', result.name);
        assertSpyCalls(getUserUserCaseMock.getByEmail, 1);
    });
});
