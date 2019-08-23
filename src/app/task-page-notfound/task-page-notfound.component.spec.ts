import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPageNotfoundComponent } from './task-page-notfound.component';

describe('TaskPageNotfoundComponent', () => {
  let component: TaskPageNotfoundComponent;
  let fixture: ComponentFixture<TaskPageNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPageNotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPageNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
