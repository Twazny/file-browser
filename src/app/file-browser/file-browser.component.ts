import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree'
import { MatTreeNestedDataSource } from '@angular/material/tree'

import { MatDialogRef } from '@angular/material/dialog';
import { FileService, TreeNode } from './file.service'


const testData = [
  {
    name: 'folder1', 
    children: [
      {
        name: 'file1',
      },
      {
        name: 'file2',
      }
    ]
  },
  {
    name: 'folder2', 
    children: [
      {
        name: 'file3',
      },
      {
        name: 'file4',
      }
    ]
  }
]

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit {
  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();
  

  selectedFile: string;

  constructor(
    public dialogRef: MatDialogRef<FileBrowserComponent>,
    private fileService: FileService
  ) {
    const data = this.fileService.getFiles();
    console.log(data)
    this.dataSource.data = data
  }

  // hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;
  hasChild = (_: number, node: TreeNode) => !!node.children ;


  files: TreeNode[]

  ngOnInit(): void {
  }

  onLeafSelect(path: string): void {
    this.selectedFile = path
  }

  onSelect(): void {
    this.dialogRef.close(this.selectedFile)
  }

}
