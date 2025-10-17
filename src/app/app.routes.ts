import { Routes } from '@angular/router';
export enum FEATURE_ROUTES {
    USER = 'users',
    AUTH = 'auth',
}
export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo: FEATURE_ROUTES.USER
    },
    // {
    //     path: FEATURE_ROUTES.AUTH,
    //     loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    // },
    {
        path: FEATURE_ROUTES.USER,
        loadChildren: () => import('./features/users/user.routes').then(m => m.USERS_ROUTES)
    },
    {path:'**', redirectTo: FEATURE_ROUTES.USER},
];
