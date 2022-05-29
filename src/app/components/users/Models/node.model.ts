import { User } from "./user.model";
export class UserNode {
    User: User
    Parent: UserNode | null = null
    Children: UserNode[] = []
    constructor(user: User, level: number | null = null) {
        this.User = user
    }
}
