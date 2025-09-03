import { User } from "../../../core/domain/user.domain.ts";
import { GetUserUserCase, GetUserUserCaseImpl } from "../../../core/usercase/get-user.usercase.ts";
import { UserFakeRepository } from "../../data/repo/fake/user.fake.repository.ts";
import { createLogger } from "../../logging/logger-console.ts";

export const createUserController = (): UserController => {

    const getUserCase = new GetUserUserCaseImpl(
        new UserFakeRepository(),
        createLogger(GetUserUserCaseImpl.name),
    );
    
    return new UserController(
        getUserCase,
    );
}

export class UserController {

    constructor(
        private getUser: GetUserUserCase,
    ) {}

    async getByEmail(email: string): Promise<User> {
        const user = await this.getUser.getByEmail(email);
        return Promise.resolve(user);
    }
}
