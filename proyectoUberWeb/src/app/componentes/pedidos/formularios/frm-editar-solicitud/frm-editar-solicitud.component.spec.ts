import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmEditarSolicitudComponent } from './frm-editar-solicitud.component';

describe('FrmEditarSolicitudComponent', () => {
  let component: FrmEditarSolicitudComponent;
  let fixture: ComponentFixture<FrmEditarSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmEditarSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmEditarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
