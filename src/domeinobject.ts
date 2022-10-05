export class UserId {
    constructor(
        private value: string
    ) { }

    public equals(other: UserId) {
        return other.toString() === other.toString();
    }

    toString() {
        return this.value;
    }
}

export class UserName {
    constructor(
        private value: string
    ) { }

    public equals(other: UserName) {
        return other.toString() === other.toString();
    }

    toString() {
        return this.value;
    }
}

export class User {
    constructor(
        private readonly id: UserId,
        private name: UserName
    ) { }

    public ChangeName(name: UserName): void {
        this.name = name;
    }
}