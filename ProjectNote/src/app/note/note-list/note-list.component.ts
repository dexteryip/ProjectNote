import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NoteService } from 'src/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.sass']
})
export class NoteListComponent implements OnInit {

  noteIdList:string[]=[];
  isLoading$ = new BehaviorSubject<boolean>(true);

  constructor(private noteSvc:NoteService) {
  }

  ngOnInit() {
    this.noteSvc.GetNoteList().subscribe(noteIdList=>{
      this.noteIdList = [...noteIdList]
      this.isLoading$.next(false)
    })
  }
  OnClickNew(){
    this.noteIdList.push("")
  }

}
