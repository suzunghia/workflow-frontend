import { Component,ComponentFactoryResolver, ViewContainerRef, OnInit, Type, Input} from '@angular/core';
import { IgGridComponent, IgTextEditorComponent, IgLayoutManagerComponent, IgDatePickerComponent, IgDateEditorComponent } from 'igniteui-angular2'
import { Dropable } from 'app/directives/dropable';
import { CustomComponent } from 'app/model/customcomponent';
@Component({
  selector: 'control-custom',
  templateUrl: 'control.component.html'
})

export class ControlComponent{
    @Input() data: any;
    private Components = {
        "text-editor": IgTextEditorComponent,
        "date-picker": IgDatePickerComponent
    }
    private title: string;
    
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef){}

    ngOnInit() {
        this.loadComponent();
        this.title = this.data;
    }

    loadComponent(){
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.Components[this.data]);
        let componentRef =  this.viewContainerRef.createComponent(componentFactory);
    }
}
