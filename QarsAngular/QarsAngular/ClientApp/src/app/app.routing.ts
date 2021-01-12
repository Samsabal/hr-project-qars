import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './auth/contact/home.component';
import { AdminComponent } from 'src/app/admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from 'src/app/_helpers/auth.guard';
import { Role } from 'src/app/_models/role';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'login',
        component: LoginComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);