import { StaticReflector } from "@angular/compiler";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddUser, GetUsers} from "../actions/user.action";
import { User } from "../models/User";
import { UserService } from "../services/user.service";
import {tap} from 'rxjs/operators';

export class UserStateModel{
    users: User[];  
}

@State<UserStateModel>({
    name: 'users',
    defaults:{
        users:[],
    }
})

export class UserState{
    constructor(private userService: UserService){
    }

    @Selector()
    static getUserList(state: UserStateModel){
        return state.users;
    }

    @Action(GetUsers)
    getUsers({getState, setState}: StateContext<UserStateModel>){
        return this.userService.fetchUsers().pipe(tap((result)=>{
            const state = getState();
            setState({
                ...state,
                users: result
            })
        }))
    }

    @Action(AddUser)
    addTodo({getState, patchState}: StateContext<UserStateModel>, {payload}: AddUser) {
        return this.userService.addUser(payload).pipe(tap((result) => {
            const state = getState();
            patchState({
                users: [...state.users, result]
            });
        }));
    }
}