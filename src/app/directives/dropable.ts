import {Directive, HostListener, ViewContainerRef, ViewRef, ElementRef, OnInit, ComponentFactoryResolver} from '@angular/core';
import { IgGridComponent, IgTextEditorComponent, IgLayoutManagerComponent, IgDatePickerComponent, IgDateEditorComponent } from 'igniteui-angular2'
import { CustomComponent } from 'app/model/customcomponent';
@Directive({
    selector: '[dropable]'
})

export class Dropable implements OnInit {
    // formbuider : FormbuilderComponent;
    private Components = {
        "text-editor": IgTextEditorComponent,
        "date-picker": IgDatePickerComponent
    }
    @HostListener('dragover', ['$event'])
    dragover(event) {
       event.preventDefault();
    }

    @HostListener('drop', ['$event'])
    drop(event) {
        if (event.stopPropagation) {
            event.stopPropagation(); // Stops some browsers from redirecting.
        }
        let data = event.dataTransfer.getData("html");
        // console.log(data);
        // document.getElementById(event.target.id).innerHTML += data + '<br/>';
        //event.target.innerHTML += data + '<br/>';
        // var control = document.getElementById(data).cloneNode(true);
        // event.target.appendChild(control);
        // event.target.appendChild(document.createElement("br"));
        // this.formbuider = new FormbuilderComponent(this.componentFactoryResolver, this.viewContainerRef);
        // this.formbuider.loadComponent(IgTextEditorComponent);
        let texinput = new CustomComponent(this.Components[data],'');
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(texinput.component);
        this.viewContainerRef.createComponent(componentFactory);
        
        // this.viewContainerRef.createComponent()
        //event.target.appendChild(document.createElement("br"));
        return false;
    }

    constructor(private componentFactoryResolver: ComponentFactoryResolver, public viewContainerRef: ViewContainerRef) { }

    ngOnInit(){
    }
}