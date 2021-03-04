import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { Subscription } from 'rxjs';

import { FileBrowserComponent } from '../file-browser/file-browser.component'
import { LayoutService } from '../layout.service';
import { UploadService } from '../upload.service'


@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit, OnDestroy {

  file: string = null;
  uploading: boolean;
  uploaded: boolean;
  mobileLayout: boolean;
  layoutSubs: Subscription;

  constructor(
    private uploadService: UploadService,
    private layoutService: LayoutService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.layoutSubs = this.layoutService.mobileLayout.subscribe(value => {
      this.mobileLayout = value
    });
  }

  ngOnDestroy(): void {
    this.layoutSubs.unsubscribe()
  }

  onBrowse(): void {
    let dialogConfig: MatDialogConfig = {
      data: {selectedFile: this.file},
      width: '100%'
    }
    if (this.mobileLayout) {
      dialogConfig = {
        ...dialogConfig,       
        maxHeight: '100vh',
        maxWidth: '100vw',
        height: '100%',
        width: '100%'
      }
    }
    const dialogReg = this.dialog.open(FileBrowserComponent,dialogConfig)
    dialogReg.afterClosed().subscribe(result => {
      if (!result) { return }
      this.file = result
      this.uploaded = false
      this.uploading = false
    })
  }

  onUpload(): void {
    this.uploading = true
    this.uploaded = false
    this.uploadService.uploadFile(this.file)
      .subscribe(path => {
        this.uploading = false
        if (this.file !== path) {
          this.uploaded = false
        } else {
          this.uploaded = true
        }
    })
  }
}
