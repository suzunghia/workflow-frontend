import { Component, OnInit } from '@angular/core';
import { Member } from 'app/model/member';
import { MemberService } from './service';

const MEMBERS: Member[] = [
      { id: 0, name: ' ' }
];

@Component({
  selector: 'app-root',
  templateUrl: './list.component.html',
  providers: [MemberService]
})
export class MemberListComponent{
    private gridOptions: IgGrid;
    private cellClickHandler: any;
	private renderedEventHandler:any;
	private data: Member[] = [];
	private id: string = "listMember";
	private newMember: any;
    
    constructor(private memberService: MemberService) {
		this.memberService.getMembers().then (members => {this.data = members, this.newMember = this.createNewProduct()});	
		this.newMember = this.createNewProduct();
		this.gridOptions = {
				width: "100%",
				primaryKey: "id",
				autoCommit: true,
				autoGenerateColumns: false,
				columns: [
						{ "headerText": "Member ID", "key": "id", "dataType": "number", "width": "30%" },
						{ "headerText": "Name", "key": "name", "dataType": "string", "width": "70%" }
				],
				features: [{
					name: "Updating",
					columnSettings: [{
						columnKey: "id",
						readOnly: true
					},{columnKey: "name", readOnly: true}]
				}, {
					name: "Filtering"
				}, {
					name: "Sorting"
				}]
		};
			
		this.cellClickHandler= function(ui){
			console.log("grid cell click event fired");
		};

		this.renderedEventHandler= function(ui){
			console.log("grid rendered event fired");
		};
	}

	createNewProduct() {
		var newMember = {};
		newMember["id"] = this.data.length;
		newMember["name"] = null;
		return newMember;
	};

	addRecord() {
		this.data.push(this.newMember);
		this.newMember = this.createNewProduct();
	};

	deleteRecord(val) {
		var ind = 0;
		this.data.filter(function( item, index ) {
			if(item["id"] === val) {
				ind= index
			};
			return item["id"] === val;
		});
		this.data.splice(ind, 1);
	};
	
}
