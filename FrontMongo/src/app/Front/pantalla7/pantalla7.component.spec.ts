import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla7Component } from './pantalla7.component';

describe('Pantalla7Component', () => {
  let component: Pantalla7Component;
  let fixture: ComponentFixture<Pantalla7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pantalla7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
