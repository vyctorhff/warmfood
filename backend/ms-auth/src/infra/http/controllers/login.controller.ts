import { LoginRequest, LoginResponse } from "../../../core/domain/login.domain.ts";
import { LoginUserCase } from "../../../core/usercase/login.usercase.ts";
import { AccountFakeRepository } from "../../data/repo/fake/account.fake.repository.ts";
import { JwtFake } from "../../jwt/jwt.fake.ts";
import { createLogger } from "../../logging/logger-console.ts";

export const createLoginController = (): LoginController => {
    const loginUserCase = new LoginUserCase(
        new AccountFakeRepository(),
        new JwtFake(),
        createLogger(LoginUserCase.name)
    );
    return new LoginController(loginUserCase);
}

export class LoginController {

    constructor(private loginUser: LoginUserCase) {}

    async login(request: LoginRequest): Promise<LoginResponse> {
        return await this.loginUser.login(request);
    }
}