import {Directive, Input, Output, EventEmitter, ElementRef, ChangeDetectorRef, ViewContainerRef} from '@angular/core';
import {AbstractDnD} from './abstractdnd';
import {DragDropConfig} from './config';
import {DragDropService, DragDropData} from './service';

@Directive({ selector: '[dnd-droppable]' })
export class DroppableComponent extends AbstractDnD {
    @Input("dropEnabled") set droppable(value:boolean) {
        this.dropEnabled = !!value;
    }
    @Input("allowDrop") set allowdrop(value: (dropData: any) => boolean) {
        this.allowDrop = value;
    }

    @Input("dropZones") set dropzones(value:Array<string>) {
        this.dropZones = value;
    }
    @Input("effectAllowed") set effectallowed(value: string) {
        this.effectAllowed = value;
    }
    @Input("effectCursor") set effectcursor(value: string) {
        this.effectCursor = value;
    }

    @Output() onDropSuccess: EventEmitter<DragDropData> = new EventEmitter<DragDropData>();
    @Output() onDragEnter: EventEmitter<DragDropData> = new EventEmitter<DragDropData>();
    @Output() onDragOver: EventEmitter<DragDropData> = new EventEmitter<DragDropData>();
    @Output() onDragLeave: EventEmitter<DragDropData> = new EventEmitter<DragDropData>();

    constructor(elemRef: ElementRef, dragDropService: DragDropService, config:DragDropConfig,
        cdr:ChangeDetectorRef, public viewContainerRef: ViewContainerRef) {

        super(elemRef, dragDropService, config, cdr);

        this.dropEnabled = true;
    }

    _onDragEnterCallback(event: MouseEvent) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragEnterClass);
            this.onDragEnter.emit({dragData: this._dragDropService.dragData, mouseEvent: event});
        }
    }

    _onDragOverCallback (event: MouseEvent) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragOverClass);
            this.onDragOver.emit({dragData: this._dragDropService.dragData, mouseEvent: event});
        }
    };

    _onDragLeaveCallback (event: MouseEvent) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
            this.onDragLeave.emit({dragData: this._dragDropService.dragData, mouseEvent: event});
        }
    };

    _onDropCallback (event: MouseEvent) {
        let dataTransfer = (event as any).dataTransfer;
        if (this._dragDropService.isDragged || (dataTransfer && dataTransfer.files)) {
            this.onDropSuccess.emit({dragData: this._dragDropService.dragData, mouseEvent: event});
            if (this._dragDropService.onDragSuccessCallback) {
                this._dragDropService.onDragSuccessCallback.emit({dragData: this._dragDropService.dragData, mouseEvent: event});
            }
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
        }
    }

}