import { assertEquals } from "@std/assert";
import { assertSpyCalls } from "@std/testing/mock";
import { GetUserUserCaseImpl } from "./get-user.usercase.ts";
import { User } from "../domain/user.domain.ts";
import { loggerMock, userRepositoryMock, userTest } from "@mocking";

Deno.test('GetUserUserCase', async (test) => {

    const logger = loggerMock;

    const user: User = userTest;

    const userRepo = userRepositoryMock;

    const getUserCaseImpl = new GetUserUserCaseImpl(
        userRepo,
        logger,
    );

    await test.step('GetByEmail success', async () => {
        const result = await getUserCaseImpl.getByEmail(user.email);

        assertEquals(result, user);
        assertSpyCalls(logger.info, 1);
        assertSpyCalls(userRepo.findByEmail, 1);
    });
});
