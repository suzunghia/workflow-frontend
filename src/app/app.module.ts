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
import { DraggableComponent } from 'app/dnd/drag';
import { DroppableComponent } from 'app/dnd/drop';
import { SortableContainer } from 'app/dnd/sort';

import { AppComponent } from './app.component';
import { DashboardComponent }   from 'app/dashboard/dashboard.component';
import { MemberAddComponent }      from 'app/member/add.component';
import { MemberListComponent } from 'app/member/list.component';
import { LoginComponent } from 'app/login/login.component';
import { FormbuilderComponent } from 'app/formbuilder/formbuilder.component';
import { ControlComponent } from 'app/formbuilder/control.component';

//Service
import { AuthenService } from 'app/login/authen.service';
import { CanActivateAuthGuard } from './active.authguard';
import { DragDropService, DragDropSortableService } from 'app/dnd/service';
import { DragDropConfig } from 'app/dnd/config';


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
    DraggableComponent,
    DroppableComponent,
    SortableContainer,

    DashboardComponent,
    MemberAddComponent,
    MemberListComponent,
    LoginComponent,
    FormbuilderComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  entryComponents: [ControlComponent, IgTextEditorComponent, IgDatePickerComponent],
  providers: [AuthenService, CanActivateAuthGuard, DragDropService,DragDropSortableService, DragDropConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
