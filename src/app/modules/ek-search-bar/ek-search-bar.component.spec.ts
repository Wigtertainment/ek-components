import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkSearchBarComponent } from './ek-search-bar.component';

describe('EkSearchBarComponent', () => {
  let component: EkSearchBarComponent;
  let fixture: ComponentFixture<EkSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
