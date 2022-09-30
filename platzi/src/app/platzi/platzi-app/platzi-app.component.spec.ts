import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatziAppComponent } from './platzi-app.component';

describe('PlatziAppComponent', () => {
  let component: PlatziAppComponent;
  let fixture: ComponentFixture<PlatziAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatziAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatziAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
