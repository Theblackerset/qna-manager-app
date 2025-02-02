import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnaListComponent } from './qna-list.component';

describe('QnaListComponent', () => {
  let component: QnaListComponent;
  let fixture: ComponentFixture<QnaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QnaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QnaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
