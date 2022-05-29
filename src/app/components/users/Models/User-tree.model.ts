import { UserNode } from "./node.model"
export class UserTree {
    Root: UserNode |null
    constructor(root: UserNode |null = null) {
        this.Root = root
    }
}