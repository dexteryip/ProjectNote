import { HttpClient, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from 'rxjs/operators';
import { HttpResponseBody } from "src/model/HttpResponse";
import { Note } from "src/model/Note";

@Injectable()
export class NoteService{
    constructor(private $http:HttpClient){}
    readonly noteUrl = "https://6n8xrxahrj.execute-api.ap-southeast-1.amazonaws.com/beta/note"
    readonly noteListUrl = "https://6n8xrxahrj.execute-api.ap-southeast-1.amazonaws.com/beta/notelist"
    GetNote(NoteId:string):Observable<Note>{
        let params = new HttpParams().set('noteid', NoteId)
        return this.$http.get<HttpResponseBody<Note>>(this.noteUrl, {params: params}).pipe(
            map((result:HttpResponseBody<Note>)=>{
                console.log("GetNote result",result)
                return result.payload
        }));
    }
    AddNote(Note:Note):Observable<Note>{
        return this.$http.post<HttpResponseBody<Note>>(this.noteUrl, Note).pipe(
            map((result:HttpResponseBody<Note>)=>{
                console.log("AddNote result",result)
                return result.payload
        }));
    }
    UpdateNote(Note:Note):Observable<Note>{
        return this.$http.put<HttpResponseBody<Note>>(this.noteUrl, Note).pipe(
            map((result:HttpResponseBody<Note>)=>{
                console.log("UpdateNote result",result)
                return result.payload
        }));
    }
    DeleteNote(Note:Note):Observable<Note>{
        return of();
    }
    GetNoteList():Observable<string[]>{
        return this.$http.get<HttpResponseBody<string[]>>(this.noteListUrl).pipe(
            map((result:HttpResponseBody<string[]>)=>{
                console.log("GetNoteList result",result)
                return result.payload
        }));
    }
}