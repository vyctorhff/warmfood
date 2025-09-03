import { User } from "../domain/user.domain.ts";
import { UserRepository } from "./dependencies/data.repository.ts";
import { Logger } from "./dependencies/logger.ts";

export interface GetUserUserCase {
    getByEmail(emai: string): Promise<User>;
}

export class GetUserUserCaseImpl implements GetUserUserCase {

    constructor(
        private userRepo: UserRepository,
        private log: Logger,
    ) {}

    async getByEmail(email: string): Promise<User> {
        this.log.info("Search user by email: ***");
        return await this.userRepo.findByEmail(email);
    }
}