import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListViewComponent } from './todo-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListViewComponent,
    /*data: {
      title: 'Backlog'
    }*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListViewRoutingModule { }

/* Export Feature Components */
export const ROUTED_COMPONENTS = [ TodoListViewComponent ];
