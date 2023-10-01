export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string
    };
    company: {
        name: string
    }



    constructor(user: { id: number; name: string; username: string; email: string; address: { street: string; }; company: { name: string; }; }) {
        this.id = user.id,
            this.name = user.name;
        this.username = user.username;
        this.email = user.email;
        this.address = user.address;
        this.company = user.company;

    }
}