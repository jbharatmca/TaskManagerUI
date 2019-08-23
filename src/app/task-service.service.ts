import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { ITaskDetails } from './taskDetails';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  public _url : string ="/assets/Data/TaskDetailList.json";
  public taskDetailsList = [
    {"TaskID": 1 , "TaskName":"Task 1", "ParentTask":"Parent Task 1", "Priority":10, "StartDate":"06/03/2017","EndDate":"06/05/2019"},
    {"TaskID":2,"TaskName":"Task 2","ParentTask":"Parent Task 2","Priority":20,"StartDate":"06/03/2017","EndDate":"06/05/2019"},
    {"TaskID":3,"TaskName":"Task 3","ParentTask":"Parent Task 3","Priority":30,"StartDate":"06/03/2017","EndDate":"06/05/2019"},
    {"TaskID":4,"TaskName":"Task 4","ParentTask":"Parent Task 4","Priority":40,"StartDate":"06/03/2017","EndDate":"06/05/2019"},
    {"TaskID":5,"TaskName":"Task 5","ParentTask":"Parent Task 5","Priority":50,"StartDate":"06/03/2017","EndDate":"06/05/2019"}
];
  constructor() { }

  getTaskDetail() {
    return this.taskDetailsList;
}

}
