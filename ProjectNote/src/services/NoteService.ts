import { HttpClient, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { HttpResponseBody } from "src/model/HttpResponse";
import { Note } from "src/model/Note";

@Injectable()
export class NoteService{
    constructor(private $http:HttpClient){}
    readonly baseUrl = "https://6n8xrxahrj.execute-api.ap-southeast-1.amazonaws.com/beta/note"
    GetNote(NoteId:string):Observable<Note>{
        let params = new HttpParams().set('noteid', NoteId)
        return this.$http.get<HttpResponseBody<Note>>(this.baseUrl, {params: params}).pipe(
            map((result:HttpResponseBody<Note>)=>{
                // console.log(result)
                return result.payload
        }));
    }
}