import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { FileBrowserComponent } from '../file-browser/file-browser.component'

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onBrowse(): void {
    const dialogReg = this.dialog.open(FileBrowserComponent,{width: '60%'})
    dialogReg.afterClosed().subscribe(result => {
      console.log(result)
    })
  }
}
