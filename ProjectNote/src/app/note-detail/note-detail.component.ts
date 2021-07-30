import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Note } from 'src/model/Note';
import { NoteService } from 'src/services/NoteService';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.sass']
})
export class NoteDetailComponent implements OnInit {

  @Input() noteId = '';
  public note$:Observable<Note> = of();
  constructor(private _noteSvc:NoteService) { }
  
  public isEditing:boolean = false;
  public isLoading:boolean = true;

  ngOnInit(): void {
    this.note$ = this._noteSvc.GetNote(this.noteId).pipe(
      tap(()=>this.isLoading=false)
    );
    // this.note$.subscribe();
  }

}
