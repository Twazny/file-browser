import { Component, OnInit, Inject} from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree'
import { MatTreeNestedDataSource } from '@angular/material/tree'

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileService, TreeNode } from './file.service'

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit {
  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {selectedFile: string},
    public dialogRef: MatDialogRef<FileBrowserComponent>,
    private fileService: FileService
  ) {

    const files = this.fileService.getFiles();
    this.dataSource.data = files
    this.treeControl.dataNodes = files
  }
  
  hasChild = (_: number, node: TreeNode) => !!node.children ;

  ngOnInit(): void {
    if (this.data.selectedFile) {
      let openedNode: TreeNode
      let nodes = this.dataSource.data
      do {
         openedNode = nodes.find(node => this.data.selectedFile.includes(node.fullPath))
         this.treeControl.expand(openedNode)
         nodes = openedNode.children
      } while (openedNode.fullPath !== this.data.selectedFile)
    } else {
      this.treeControl.expand(this.dataSource.data[0])
    }
  }

  onLeafSelect(path: string): void {
    if (this.data.selectedFile === path) {
      this.data.selectedFile = null
      return  
    }
    this.data.selectedFile = path
  }

  onSelect(): void {
    this.dialogRef.close(this.data.selectedFile)
  }

  onExpandAll(): void {
    this.treeControl.expandAll()
  }

  onCollapseAll(): void {
    this.treeControl.collapseAll()
  }
}
