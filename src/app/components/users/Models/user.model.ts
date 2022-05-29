export class User {
    code: string;
    name: string;
    imagePath: string;
    Id: string | null = null
    constructor(name: string, code: string, imagePath: string) {
        this.name = name
        this.code = code
        this.imagePath = imagePath
    }
}