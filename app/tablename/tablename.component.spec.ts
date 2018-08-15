
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablenameComponent } from './tablename.component';

describe('TablenameComponent', () => {
  let component: TablenameComponent;
  let fixture: ComponentFixture<TablenameComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablenameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
