import { spy } from "@std/testing/mock";
import { User } from "../../src/core/domain/user.domain.ts";
import { userTest } from "./user-mock.ts";

export const userRepositoryMock = {
    findByEmail: spy((email: string): Promise<User> => {
        const userClone = structuredClone(userTest);
        userClone.email = email;
        return Promise.resolve(userClone);
    }),
};
