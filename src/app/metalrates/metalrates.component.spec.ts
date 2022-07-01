import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalratesComponent } from './metalrates.component';

describe('MetalratesComponent', () => {
  let component: MetalratesComponent;
  let fixture: ComponentFixture<MetalratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalratesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetalratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
