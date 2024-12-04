import { Routes } from '@angular/router';
import { AddUserComponent } from './component/add-user/add-user.component';
import { UserListComponent } from './component/user-list/user-list.component';

export const routes: Routes = [
    {
        path:'adduser',
        component: AddUserComponent
    },
    {
        path:'userList',
        component: UserListComponent
    },
    {
        path:'adduser/:id',
        component: AddUserComponent
    }
];
