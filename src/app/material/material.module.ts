import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatProgressBarModule } from '@angular/material/progress-bar';

const materialComponents = [
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatProgressBarModule
]

@NgModule({
  imports: materialComponents,
  exports: materialComponents
})
export class MaterialModule { }
