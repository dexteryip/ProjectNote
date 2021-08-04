import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { not } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { Note } from 'src/model/note.model';
import { NoteService } from 'src/services/note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.sass']
})
export class NoteDetailComponent implements OnInit {

  @Input() noteId = '';
  note:Note=new Note();
  note$: Observable<Note> = of();

  // triggerer of frontend async pipe
  refreshNote$ = new BehaviorSubject<boolean>(true);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private noteSvc: NoteService, private formBuilder:FormBuilder) { }

  noteForm = new FormGroup({
    Subject: new FormControl('', Validators.required),
    Content: new FormControl('')
  })

  public isEditing: boolean = false;
  public isLocked: boolean = false;

  ngOnInit(): void {
    // init loading
    this.note$ = this.refreshNote$.pipe(
      filter(()=>this.noteId!=null),
      tap(()=>this.isLoading$.next(true)),
      switchMap(_=>this.noteSvc.GetNote(this.noteId)),
      tap((note)=>{
        this.note = note
        this.isLoading$.next(false)
      })
    )
    this.noteForm = this.formBuilder.group({
      Subject: [null, Validators.required],
      Content: [null]
    })
    if(this.noteId==="")
      this.isEditing = true;
  }
  public OnEditClick() {
    // // refresh method
    // this._noteSvc.GetNote(this.noteId).subscribe((note)=>{
    //   this.noteForm.setValue({Subject:note.Subject,Content:note.Content});
    //   this.isEditing = true;
    //   this.isLocked = false;
    // })
    // cached method to increase speed
    this.noteForm.setValue({Subject:this.note.Subject,Content:this.note.Content});
    this.isEditing = true;
    this.isLocked = false;
    this.noteForm.enable();
  }
  public OnSaveClick() {
    this.isLocked = true;
    this.noteForm.disable();
    this.isLoading$.next(true)
    if (!this.noteId) {
      // create case
      console.log("create value:", this.noteForm.value);
      this.noteSvc.AddNote(this.noteForm.value).subscribe((note) => {
        this.noteId = note.NoteId;
        this.refreshNote$.next(true);
        this.isEditing=false;
        // this.Refresh();
      })
    }
    else {
      // edit case
      let updatedNote: Note = { ...this.noteForm.value, NoteId: this.noteId };
      console.log("edit value:", updatedNote);
      this.noteSvc.UpdateNote(updatedNote).subscribe(() => {
        // this.Refresh();
        this.refreshNote$.next(true);
        this.isEditing=false;
      })
    }
  }
  public OnCancelClick() {
    this.isLocked = true;
    this.isEditing = false;
    // this.refreshNote$.next(true);
  }

}
