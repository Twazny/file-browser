import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util'
import { Injectable } from '@angular/core'
import files from './files'


export interface TreeNode {
    name: string;
    fullPath?: string;
    children?: TreeNode[]
}  

@Injectable({
    providedIn: 'root'
})
export class FileService {
    files: string
    constructor() {
        this.files = files.trim()
    }

    private parseToTreeStructure(): TreeNode[]  {
        let res: TreeNode[] = []
        this.files.split("\n").forEach(path => {
            let lvlArray = res
            path.split("/").forEach((name, idx, array) => {

                if (name.length === 0) {
                    return
                }
                let nodeIdx = lvlArray.findIndex(node => node.name === name)
                if (nodeIdx >= 0) {
                    lvlArray = lvlArray[nodeIdx].children
                } else {
                    const newLeaf: TreeNode = {
                        name,
                        fullPath: array.slice(0,idx+1).join("/")
                    }
                    if (name === "dire") {
                        console.log(idx,array.length)
                    }
                    if (idx < array.length - 1) {
                        newLeaf.children = []
                    }

                    lvlArray.push(newLeaf)
                    lvlArray = newLeaf.children
                }
            })
        })

        return res
    }

    getFiles() {
        return this.parseToTreeStructure()
    }
}