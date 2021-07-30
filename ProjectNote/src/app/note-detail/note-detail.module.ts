import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteDetailComponent } from './note-detail.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { NoteService } from 'src/services/NoteService';
import { MatInputModule } from '@angular/material/input';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';


@NgModule({
  declarations: [NoteDetailComponent],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    LoadingSpinnerModule
  ],
  providers: [NoteService],
  exports: [NoteDetailComponent]
})
export class NoteDetailModule { }
