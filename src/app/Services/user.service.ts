import { Injectable } from "@angular/core";
import { User } from "../components/users/Models/user.model";
import { IUserService } from "./user.service.interface"
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UsersJsonService implements IUserService {
    constructor(private httpClient: HttpClient) {
    }
    getAll(): Observable<User[]> {
        return this.httpClient.get<User[]>("assets/files/users.json")
    }
}

