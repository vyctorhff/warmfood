import { User } from "./user.domain.ts";

export type Account = {
    login: string,
    pass: string,
    user: User,
    dateCreated: Date
}