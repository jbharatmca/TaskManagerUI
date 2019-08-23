import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { TaskServiceService } from './task-service.service';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,    
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule ,
    DatePickerModule ,
    FormsModule   
  ],
  providers: [TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
