import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoesComponent } from './potatoes.component';

describe('PotatoesComponent', () => {
  let component: PotatoesComponent;
  let fixture: ComponentFixture<PotatoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotatoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
