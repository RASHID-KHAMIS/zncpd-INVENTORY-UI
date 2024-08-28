import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPriorityComponent } from './work-priority.component';

describe('WorkPriorityComponent', () => {
  let component: WorkPriorityComponent;
  let fixture: ComponentFixture<WorkPriorityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkPriorityComponent]
    });
    fixture = TestBed.createComponent(WorkPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
