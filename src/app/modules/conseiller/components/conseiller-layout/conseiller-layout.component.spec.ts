import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerLayoutComponent } from './conseiller-layout.component';

describe('ConseillerLayoutComponent', () => {
  let component: ConseillerLayoutComponent;
  let fixture: ComponentFixture<ConseillerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConseillerLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
