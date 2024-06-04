import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule} from '@angular/material/table';
import { QnaMakerService } from '../services/qna-maker.service';

interface Question {
  MainQuestion: string;
  Answer: string;
  Alternatives: string;
  Id: string;
}
@Component({
  selector: 'app-qna-list',
  templateUrl: './qna-list.component.html',
  styleUrls: ['./qna-list.component.css']
})
export class QnaListComponent implements OnInit {
  questions: Question[] = [];

  constructor(private qnAMakerService: QnaMakerService, public dialog: MatDialog) { }

  ngOnInit() {
      this.qnAMakerService.getQuestions().subscribe(
        (response: any) => {
          this.questions = response;
        });
    }
    
  }
