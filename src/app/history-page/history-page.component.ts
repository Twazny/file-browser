import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {

  // historySubs: Subscription
  history$: Observable<string[]>

  constructor(
    private uploadService: UploadService
  ) { }

  ngOnInit(): void {
    this.history$ = this.uploadService.historySubject
  }

  onClear(): void {
    this.uploadService.clearHistory()
  }

}
