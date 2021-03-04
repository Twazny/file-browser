import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog'
import { MatTreeModule } from '@angular/material/tree'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTooltipModule } from '@angular/material/tooltip'

const materialComponents = [
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTreeModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatTooltipModule
]

@NgModule({
  imports: materialComponents,
  exports: materialComponents
})
export class MaterialModule { }
