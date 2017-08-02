import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild} from '@angular/core';
import { ControlComponent } from 'app/formbuilder/control.component';
import { DroppableComponent } from 'app/dnd/drop';
@Component({
  selector: 'form-builder',
  templateUrl: 'formbuilder.component.html'
})

export class FormbuilderComponent {
    private layoutOptions: any;
    components: Array<string> = [];
    @ViewChild(DroppableComponent) droppable: DroppableComponent;
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {        
		this.layoutOptions={
			layoutMode: "border",
			height:"300px",
			borderLayout: {
				leftWidth:"20%",
				rightWidth:"40%"
			}
        };
        
    }

    ngOnChange(){
        this.components.forEach(element => {
            
        });
    }

    loadComponent(event: any){
        // console.log(event);
        //this.viewContainerRef.element.nativeElement = document.getElementById('drop');
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ControlComponent);
        // this.viewContainerRef.clear();
        let componentRef =  this.droppable.viewContainerRef.createComponent(componentFactory);
        // this.viewContainerRef.insert()
        (<ControlComponent>componentRef.instance).data = event.dragData;
    }
    
}
