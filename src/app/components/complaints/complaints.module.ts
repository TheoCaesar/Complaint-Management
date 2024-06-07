import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintsComponent } from './complaints.component';
import { UtilsModule } from 'src/app/utils/utils.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComplaintsComponent
  ],
  imports: [
    CommonModule, UtilsModule, ReactiveFormsModule
  ],
  exports: [
    ComplaintsComponent
  ]
})
export class ComplaintsModule { }
