export class User {
    constructor(
        private _id: number,
        private _username: string,
        private _password: string,
        private _firstName: string,
        private _lastName: string
    ) {}

    get id(): number {
        return this._id;
    }

    set id(newId: number) {
        this._id = newId;
    }

    get username(): string {
        return this._username;
    }

    set username(newUsername: string) {
        this._username = newUsername;
    }

    get password(): string {
        return this._password;
    }

    set password(newPassword: string) {
        this._password = newPassword;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(newFirstName: string) {
        this._firstName = newFirstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(newLastName: string) {
        this._lastName = newLastName;
    }
}