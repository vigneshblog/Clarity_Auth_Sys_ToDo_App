/* Angular Imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { PrimeNgModule } from '../prime-ng.module';



@NgModule({

  imports: [
    CommonModule,
    MaterialModule,
    PrimeNgModule,
  ],

  declarations: [
   
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
