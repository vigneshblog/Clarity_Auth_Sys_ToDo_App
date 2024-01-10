import { Component, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserStore } from 'src/app/shared/stores/user-store';

@Component({
  selector: 'app-todo-list-view-page',
  templateUrl: './todo-list-view.component.html',
  styleUrls: ['./todo-list-view.component.css']
})
export class TodoListViewComponent {


  
  constructor(
    private userStore : UserStore
  ){
    
  }

  public ngOnInit() : void {
    
  }



  
}