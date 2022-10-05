import { User } from "./domeinobject";
import { IUserRepository } from "./repository-interface";

export class UserApplicationService {

}

export class UserService {
    public exists(user: User): boolean {
        // 重複を確認する処理
        return false;
    }
}