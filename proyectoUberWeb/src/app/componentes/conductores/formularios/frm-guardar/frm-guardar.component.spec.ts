import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmGuardarComponent } from './frm-guardar.component';

describe('FrmGuardarComponent', () => {
  let component: FrmGuardarComponent;
  let fixture: ComponentFixture<FrmGuardarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmGuardarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmGuardarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
