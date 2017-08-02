import {Directive, Input, Output, EventEmitter, ElementRef, ChangeDetectorRef} from '@angular/core';
import {AbstractDnD} from './abstractdnd';
import {DragDropConfig} from './config';
import {DragDropService, DragDropData} from './service';

@Directive({ selector: '[dnd-draggable]' })
export class DraggableComponent extends AbstractDnD {
    @Input("dragEnabled") set draggable(value:boolean) {
        this.dragEnabled = !!value;
    }

    @Input() dragData: any;

    @Input("dropZones") set dropzones(value:Array<string>) {
        this.dropZones = value;
    }
    @Input("effectAllowed") set effectallowed(value: string) {
        this.effectAllowed = value;
    }
    @Input("effectCursor") set effectcursor(value: string) {
        this.effectCursor = value;
    }
    @Input() cloneItem: boolean;

    @Output() onDragStart: EventEmitter<DragDropData> = new EventEmitter<DragDropData>();
    @Output() onDragEnd: EventEmitter<DragDropData> = new EventEmitter<DragDropData>();
    @Output("onDragSuccess") onDragSuccessCallback: EventEmitter<any> = new EventEmitter<any>();
    constructor(elemRef: ElementRef, dragDropService: DragDropService, config:DragDropConfig,
        cdr:ChangeDetectorRef) {

        super(elemRef, dragDropService, config, cdr);
        this._defaultCursor = this._elem.style.cursor;
        this.dragEnabled = true;
    }

    _onDragStartCallback(event: MouseEvent) {
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        this._elem.classList.add(this._config.onDragStartClass);
        //
        this.onDragStart.emit({dragData: this.dragData, mouseEvent: event});
    }

    _onDragEndCallback(event: MouseEvent) {
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        this._elem.classList.remove(this._config.onDragStartClass);
        //
        this.onDragEnd.emit({dragData: this.dragData, mouseEvent: event});
    }
}