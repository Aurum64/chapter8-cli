import { User, UserId, UserName } from "./domeinobject";
import { IUserRepository } from "./repository-interface";
export class InMemoryUserRepository implements IUserRepository {
    findById(id: UserId): User {
        return new User(id, new UserName('userName'));
    };
    findByUserName(name: UserName): User {
        return new User(new UserId('userId'), name)
    };
    findAll(): User[] {
        return [];
    };
    save(user: User): void { };
    delete(user: User): void { };
}