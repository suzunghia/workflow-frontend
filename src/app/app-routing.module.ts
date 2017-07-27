import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
    
import { DashboardComponent }   from 'app/dashboard/dashboard.component';
import { MemberAddComponent }      from 'app/member/add.component';
import { MemberListComponent }      from 'app/member/list.component';
// import { HeroDetailComponent }  from 'app/hero/hero-detail.component';
    
const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    // { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'members',     component: MemberListComponent }
];
    
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}