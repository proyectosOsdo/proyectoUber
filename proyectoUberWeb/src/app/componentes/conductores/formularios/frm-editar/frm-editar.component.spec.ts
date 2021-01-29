import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmEditarComponent } from './frm-editar.component';

describe('FrmEditarComponent', () => {
  let component: FrmEditarComponent;
  let fixture: ComponentFixture<FrmEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
