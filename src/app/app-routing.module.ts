import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
    
import { DashboardComponent }   from 'app/dashboard/dashboard.component';
import { MemberAddComponent }      from 'app/member/add.component';
import { MemberListComponent }      from 'app/member/list.component';
import { LoginComponent } from 'app/login/login.component';
import { FormbuilderComponent } from 'app/formbuilder/formbuilder.component';
// import { HeroDetailComponent }  from 'app/hero/hero-detail.component';
import { CanActivateAuthGuard } from './active.authguard';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'formbuilder', component: FormbuilderComponent},
    { path: 'dashboard',  component: DashboardComponent, canActivate: [CanActivateAuthGuard] },
    // { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'members', component: MemberListComponent, canActivate: [CanActivateAuthGuard] }
];
    
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}