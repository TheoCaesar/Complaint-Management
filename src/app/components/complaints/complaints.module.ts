import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintsComponent } from './complaints.component';
import { UtilsModule } from 'src/app/utils/utils.module';


@NgModule({
  declarations: [
    ComplaintsComponent
  ],
  imports: [
    CommonModule, UtilsModule, 
  ],
  exports: [
    ComplaintsComponent
  ]
})
export class ComplaintsModule { }
