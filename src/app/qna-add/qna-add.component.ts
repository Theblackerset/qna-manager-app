import { Component } from '@angular/core';
import { QnaMakerService } from '../qna-maker.service';

@Component({
  selector: 'app-qna-add',
  templateUrl: './qna-add.component.html',
  styleUrls: ['./qna-add.component.css']
})
export class QnaAddComponent {
  question = {
    answer: '',
    source: 'Editorial',
    questions: [],
    metadata: []
  };

  constructor(private qnAMakerService: QnaMakerService) { }

  // addQuestion(): void {
  //   this.qnAMakerService.addQuestion(this.question).subscribe(() => {
  //     // Maneja la respuesta del servidor
  //   });
  // }
}
