import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskPageNotfoundComponent } from './task-page-notfound/task-page-notfound.component';

const routes: Routes = [
{path:"ViewTask", component:TaskViewComponent},
{path:"AddTask",component:TaskAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent =[TaskAddComponent,
                                TaskViewComponent,
                                TaskPageNotfoundComponent
                              ]
