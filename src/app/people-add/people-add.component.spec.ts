import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleAddComponent } from './people-add.component';

describe('PeopleAddComponent', () => {
  let component: PeopleAddComponent;
  let fixture: ComponentFixture<PeopleAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleAddComponent]
    });
    fixture = TestBed.createComponent(PeopleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
