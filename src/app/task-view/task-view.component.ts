import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

public taskList =[];
  constructor(private _service:TaskServiceService) { }

  ngOnInit() {
    this.taskList= this._service.getTaskDetail(); 
    console.log(this.taskList);
  }

}
