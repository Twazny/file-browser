import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { FileBrowserComponent } from '../file-browser/file-browser.component'
import { UploadService } from '../upload.service'

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {

  file: string = null;
  uploading: boolean;
  uploaded: boolean;

  constructor(
    private uploadService: UploadService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onBrowse(): void {
    const dialogReg = this.dialog.open(FileBrowserComponent,{
      width: '100%', 
      data: {selectedFile: this.file}
    })
    dialogReg.afterClosed().subscribe(result => {
      if (!result) { return }
      this.file = result
      this.uploaded = false
      this.uploading = false
    })
  }

  onUpload(): void {
    this.uploading = true
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
