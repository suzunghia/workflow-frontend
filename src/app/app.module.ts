import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Ignite UI
import { IgGridComponent, IgTextEditorComponent, IgLayoutManagerComponent } from 'igniteui-angular2'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { DashboardComponent }   from 'app/dashboard/dashboard.component';
import { MemberAddComponent }      from 'app/member/add.component';
import { MemberListComponent } from 'app/member/list.component';
import { LoginComponent } from 'app/login/login.component';
import { FormbuilderComponent } from 'app/formbuilder/formbuilder.component';
import { AuthenService } from 'app/login/authen.service';
import { CanActivateAuthGuard } from './active.authguard';

@NgModule({
  declarations: [
    AppComponent,
    //Ignite UI
    IgGridComponent,
    IgTextEditorComponent,
    IgLayoutManagerComponent,
    DashboardComponent,
    MemberAddComponent,
    MemberListComponent,
    LoginComponent,
    FormbuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthenService, CanActivateAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
