import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Ignite UI
import { IgGridComponent, IgTextEditorComponent, IgLayoutManagerComponent, IgDatePickerComponent, IgDateEditorComponent } from 'igniteui-angular2'

//Module
import { AppRoutingModule } from './app-routing.module'

//Directive
import { Draggable } from 'app/directives/draggable';
import { Dropable } from 'app/directives/dropable';

import { AppComponent } from './app.component';
import { DashboardComponent }   from 'app/dashboard/dashboard.component';
import { MemberAddComponent }      from 'app/member/add.component';
import { MemberListComponent } from 'app/member/list.component';
import { LoginComponent } from 'app/login/login.component';
import { FormbuilderComponent } from 'app/formbuilder/formbuilder.component';

//Service
import { AuthenService } from 'app/login/authen.service';
import { CanActivateAuthGuard } from './active.authguard';

@NgModule({
  declarations: [
    AppComponent,
    //Ignite UI
    IgGridComponent,
    IgTextEditorComponent,
    IgLayoutManagerComponent,
    IgDatePickerComponent,
    IgDateEditorComponent,
    
    Draggable,
    Dropable,

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
  entryComponents: [IgTextEditorComponent, IgDatePickerComponent],
  providers: [AuthenService, CanActivateAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
