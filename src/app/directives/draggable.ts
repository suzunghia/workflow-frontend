import {Directive, HostListener, ElementRef, OnInit, Component} from '@angular/core';
// import {Map, Merge} from 'rxjs/Rx';

@Directive({
    selector: '[draggable]'
})

export class Draggable implements OnInit {
    @HostListener('dragstart', ['$event'])
    dragstart(event) {
        event.dataTransfer.setData("html", event.target.id);
        var parent = event.target.getAttribute("data-parent");
        if (!parent){
            event.target.setAttribute("data-parent",event.target.parentNode.id);
        }
    }

    @HostListener('dragend', ['$event'])
    dragend(event) {
        var parent = document.getElementById(event.target.getAttribute("data-parent"));
        parent.appendChild(event.target);
        return false;
    }

    constructor(public element: ElementRef) {
    }

    ngOnInit(){
        this.element.nativeElement.draggable = true;
    }

    createControlComponent(data: any): Component{
        return;
    }
}