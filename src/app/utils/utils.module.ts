import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { SliceTextPipe } from './pipes/slice-text.pipe';



@NgModule({
  declarations: [
    PaginationComponent,
    SliceTextPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    SliceTextPipe
  ]
})
export class UtilsModule { }
