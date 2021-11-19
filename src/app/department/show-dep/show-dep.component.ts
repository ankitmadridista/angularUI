import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];

  ModalTitle:string | undefined;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  ngOnInit(): void {
    this.refreshDepList();
  }

  addCLick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    console.log('addCLick')
    console.log(this.dep)
    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;

  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }

  editCLick(item: any){
    this.dep = item;
    console.log('in edictClick');    
    console.log(this.dep)
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDepComp = true;
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList = data;
    });
  }


}
