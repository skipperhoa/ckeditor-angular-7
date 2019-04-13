import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CKEditorModule } from 'ngx-ckeditor';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {CkeditorComponent} from  './ckeditor/ckeditor.component';
@NgModule({
  declarations: [
    AppComponent,
    CkeditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
