import { Component,ComponentFactoryResolver, ViewContainerRef, OnInit, Type} from '@angular/core';
import { Dropable } from 'app/directives/dropable';
import { CustomComponent } from 'app/model/customcomponent';
@Component({
  selector: 'app-root',
  templateUrl: 'formbuilder.component.html'
})

export class FormbuilderComponent {
    private layoutOptions: any;
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {        
		this.layoutOptions={
			layoutMode: "border",
			height:"300px",
			borderLayout: {
				leftWidth:"20%",
				rightWidth:"40%"
			}
		};
    }
    
    loadComponent(comp: Type<any>){
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);
        this.viewContainerRef.createComponent(componentFactory);
    }
}
