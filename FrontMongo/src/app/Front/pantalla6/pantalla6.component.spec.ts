import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla6Component } from './pantalla6.component';

describe('Pantalla6Component', () => {
  let component: Pantalla6Component;
  let fixture: ComponentFixture<Pantalla6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pantalla6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
