import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFileComponent } from './no-file.component';

describe('NoFileComponent', () => {
  let component: NoFileComponent;
  let fixture: ComponentFixture<NoFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
