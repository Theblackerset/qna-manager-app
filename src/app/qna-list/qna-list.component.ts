import { Component, OnInit } from '@angular/core';
import { QnaMakerService } from '../qna-maker.service';

@Component({
  selector: 'app-qna-list',
  templateUrl: './qna-list.component.html',
  styleUrls: ['./qna-list.component.css']
})
export class QnaListComponent implements OnInit {
  questions: any[] = [];

  constructor(private qnAMakerService: QnaMakerService) { }

  ngOnInit(): void {
    this.qnAMakerService.getQuestions().subscribe(data => {
      this.questions = data.qnaDocuments;
    });
  }

  // deleteQuestion(id: string): void {
  //   this.qnAMakerService.deleteQuestion(id).subscribe(() => {
  //     this.questions = this.questions.filter(q => q.id !== id);
  //   });
  // }
}
