import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Ignite UI
import { IgGridComponent, IgTextEditorComponent } from 'igniteui-angular2'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { DashboardComponent }   from 'app/dashboard/dashboard.component';
import { MemberAddComponent }      from 'app/member/add.component';
import { MemberListComponent } from 'app/member/list.component';

@NgModule({
  declarations: [
    AppComponent,
    //Ignite UI
    IgGridComponent,
    IgTextEditorComponent,
    DashboardComponent,
    MemberAddComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
