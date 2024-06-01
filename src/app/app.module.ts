import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { provideHttpClient} from '@angular/common/http'

import { QnaListComponent } from './qna-list/qna-list.component';
import { QnaAddComponent } from './qna-add/qna-add.component';
import { QnaMakerService } from './qna-maker.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    QnaListComponent,
    QnaAddComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  
  ],
  providers: [QnaMakerService, provideHttpClient()],
  bootstrap: []
})
export class AppModule { }
