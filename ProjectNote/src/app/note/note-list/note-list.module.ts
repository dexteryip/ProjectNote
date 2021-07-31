import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteDetailModule } from '../note-detail/note-detail.module';
import { NoteListComponent } from './note-list.component';
import { MatButtonModule } from '@angular/material/button';
import { LoadingSpinnerModule } from 'src/app/loading-spinner/loading-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    NoteDetailModule,
    MatButtonModule,
    LoadingSpinnerModule
  ],
  declarations: [NoteListComponent],
  exports:[NoteListComponent]
})
export class NoteListModule { }
