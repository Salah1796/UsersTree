import { Observable } from "rxjs";
import { User } from "../components/users/Models/user.model";
export interface IUserService{
    getAll():Observable<User[]>
}