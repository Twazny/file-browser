import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { UploadPageComponent } from './upload-page/upload-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'upload', pathMatch: 'full'},
  {path: 'upload', component: UploadPageComponent},
  {path: 'history', component: HistoryPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
