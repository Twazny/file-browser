import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'

import { UploadPageComponent } from './upload-page/upload-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { FileBrowserComponent } from './file-browser/file-browser.component'

@NgModule({
  declarations: [
    AppComponent,
    UploadPageComponent,
    HistoryPageComponent,
    FileBrowserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
