import { Routes } from '@angular/router';
import { MonsterList } from './pages/monster-list/monster-list';
import { Monster } from './pages/monster/monster.component';
import { NotFound } from './pages/not-found/not-found';
import { LoginComponent as Login} from './pages/login/login';
import { isLoggedInGuard } from './guards/is-logged-in-guard';

export const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},{
    path:'home',
    component: MonsterList, 
    canActivate: [isLoggedInGuard]
},{
    path: 'login',
    component: Login
},{
    path: 'Monster',
    children: [{
        path: '',
        component: Monster, 
        canActivate: [isLoggedInGuard]
    },{
        path: ':id',
        component: Monster, 
        canActivate: [isLoggedInGuard]
    }]
},{
    path: '**',
    component: NotFound,
}
];
