import { LoginRequest, LoginResposne } from "../../../core/domain/login.domain.ts";
import { LoginUserCase } from "../../../core/usercase/login.usercase.ts";
import { AccountFakeRepository } from "../../data/repo/fake/account.fake.repository.ts";
import { JwtFacke } from "../../jwt/jwt.facke.ts";

export const createLoginController = (): LoginController => {
    const loginUserCase = new LoginUserCase(
        new AccountFakeRepository(),
        new JwtFacke()
    );
    return new LoginController(loginUserCase);
}

export class LoginController {

    constructor(private loginUser: LoginUserCase) {}

    login(request: LoginRequest): LoginResposne {
        return this.loginUser.login(request);
    }
}