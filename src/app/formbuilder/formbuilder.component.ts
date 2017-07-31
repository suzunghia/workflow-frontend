import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'formbuilder.component.html'
})
export class FormbuilderComponent {
    private layoutOptions: any;
    
    constructor() {        
		this.layoutOptions={
			layoutMode: "border",
			height:"300px",
			borderLayout: {
				leftWidth:"10%",
				rightWidth:"20%"
			}
		};
    }
  
    allowDrop(ev){
        ev.preventDefault();
    }

    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    drop(ev) {
        ev.preventDefault();
        // console.log(JSON.parse(ev.dataTransfer.getData('Text')));
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
}
