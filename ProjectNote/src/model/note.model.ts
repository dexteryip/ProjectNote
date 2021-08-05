
export const StageOptionArray = [
    {value: '', viewValue: '-----'},
    {value: 'new', viewValue: 'New'},
    {value: 'progress', viewValue: 'In Progress'},
    {value: 'done', viewValue: 'Done'}
] as const;

export class Note {
    NoteId: string = "";
    Subject: string = "";
    Content: string = "";
    Stage:string = "";
    CreatedDate: string = "";
    LastUpdatedDate:string="";
}