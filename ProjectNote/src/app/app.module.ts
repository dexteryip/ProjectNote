import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteDetailModule } from './note-detail/note-detail.module';
import { LoadingSpinnerModule } from './loading-spinner/loading-spinner.module';

@NgModule({
  declarations: [	
    AppComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoteDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
