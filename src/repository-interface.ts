import { User, UserId, UserName } from "./domeinobject";
export interface IUserRepository {
    findById(id: UserId): User;
    findByUserName(name: UserName): User;
    findAll(): User[];
    save(user: User): void;
    delete(user: User): void;
}
