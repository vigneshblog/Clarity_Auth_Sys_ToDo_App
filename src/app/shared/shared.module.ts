/* Angular Imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { PrimeNgModule } from '../prime-ng.module';
import { AddTaskComponent } from './modals/add-task/add-task.component';



@NgModule({

  imports: [
    CommonModule,
    MaterialModule,
    PrimeNgModule,
  ],

  declarations: [
   
  
    AddTaskComponent
  ],

  providers: [
    
  ],

  entryComponents: [
    
  ],

  exports: [
    CommonModule,
    MaterialModule,
    PrimeNgModule,
    
  ],
  

})

export class SharedModule { }
