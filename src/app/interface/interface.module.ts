/* Angular Imports */
import { NgModule }                       from '@angular/core';
import { CommonModule }                   from '@angular/common';
import { RouterModule }                   from '@angular/router';
import { MaterialModule } from '../material.module';
import { PrimeNgModule } from '../prime-ng.module';



/* Feature Imports */


/* Feature Imports */
import {
  InterfaceRoutingModule,
  ROUTED_COMPONENTS
}                                         from './interface-routing.module';
import { SharedModule } from '../shared/shared.module';


/**
 * All entry level dependencies must be declared at this level
 */

@NgModule({

  imports: [
    CommonModule,
    InterfaceRoutingModule,
    SharedModule,
    MaterialModule,
    PrimeNgModule,
    
  ],

  declarations: [
    ROUTED_COMPONENTS,
  ],

  providers: [],

  entryComponents: [
    /* Entry Components */
  ],

  exports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    PrimeNgModule,
  ]

})

export class InterfaceModule { }