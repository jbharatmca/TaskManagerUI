import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  public taskID ="";
  public parentTask="";
  public priority="";
  public startDate="";
  public endDate="";

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

  }
  onClear(){
    this.taskID="";
    this.parentTask="";
    this.priority="";
    this.startDate="";
    this.endDate="";
  }

}
