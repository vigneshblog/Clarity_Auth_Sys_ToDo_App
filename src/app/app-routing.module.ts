import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    /**
   * The InterfaceModule is the acting root entry point for all feature routes
   * and layout components.
   *
   */
    {
      path: '',
      loadChildren: () => import('./interface/interface.module').then(m => m.InterfaceModule),
      data: {
        preload: true
        //activities: ['Admin']
      },
      //canActivate : [AuthGuard]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
