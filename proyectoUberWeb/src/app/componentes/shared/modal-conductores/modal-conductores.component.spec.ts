import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConductoresComponent } from './modal-conductores.component';

describe('ModalConductoresComponent', () => {
  let component: ModalConductoresComponent;
  let fixture: ComponentFixture<ModalConductoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConductoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
