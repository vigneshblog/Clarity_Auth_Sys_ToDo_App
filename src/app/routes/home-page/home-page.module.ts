import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HomePageRoutingModule,  ROUTED_COMPONENTS} from './home-page-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { PrimeNgModule } from 'src/app/prime-ng.module';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ROUTED_COMPONENTS,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
    MaterialModule,
    PrimeNgModule
  ],
  exports: [
    RouterModule,
    SharedModule,
    MaterialModule,
    PrimeNgModule
  ]
})
export class HomePageModule { 
  constructor(
  ){}
}
