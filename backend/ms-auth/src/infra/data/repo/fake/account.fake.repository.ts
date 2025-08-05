import { Account } from "../../../../core/domain/acount.domain.ts";
import { AccountRepositoy } from "../../../../core/usercase/data.repository.ts";

export class AccountFakeRepository implements AccountRepositoy {
    
  finByLoginAndPass(): Account {
    return {
        login: 'admin',
        pass: '123',
        dateCreated: new Date(),
        user: {
            name: 'Admin',
            email: 'admin@warmfood.com',
            dateCreated: new Date(),
        },
    }
  }
}