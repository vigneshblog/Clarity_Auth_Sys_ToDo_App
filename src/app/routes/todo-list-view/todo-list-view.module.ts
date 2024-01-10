import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { MaterialModule } from 'src/app/material.module';
import { PrimeNgModule } from 'src/app/prime-ng.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { TodoListViewRoutingModule, ROUTED_COMPONENTS } from './toddo-list-view-routing.module';

@NgModule({
  declarations: [
    ROUTED_COMPONENTS,
  ],
  imports: [
    CommonModule,
    TodoListViewRoutingModule,
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
export class TodoListViewModule { 
  constructor(
  ){}
}
