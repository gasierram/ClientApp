import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';


export enum USERS_PAGES {
    USER = '/user',
    HOME = '/user',
    CREATE = 'new',
    DETAIL = ':id'
}
export const USERS_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: UserListComponent
            },
            {
                path: 'new',
                component: UserCreateComponent
            },
            {
                path: USERS_PAGES.DETAIL,
                loadComponent: () => 
                    import('./pages/user-detail/user-detail.component').then(m => m.UserDetailComponent)
            },
            {path:'**', redirectTo:USERS_PAGES.USER}

        ]
    }
];