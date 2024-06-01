import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnaAddComponent } from './qna-add.component';

describe('QnaAddComponent', () => {
  let component: QnaAddComponent;
  let fixture: ComponentFixture<QnaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QnaAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QnaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
