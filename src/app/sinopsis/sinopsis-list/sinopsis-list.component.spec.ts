import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinopsisListComponent } from './sinopsis-list.component';

describe('SinopsisListComponent', () => {
  let component: SinopsisListComponent;
  let fixture: ComponentFixture<SinopsisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinopsisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinopsisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
