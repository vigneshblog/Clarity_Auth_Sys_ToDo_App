import { Component, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserStore } from 'src/app/shared/stores/user-store';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  public userName : string = '';

  
  constructor(
    private userStore : UserStore,
    private router : Router
  ){
    
  }

  public ngOnInit() : void {
    
   


  }

  public onSubmit(){

    this.userStore.setUserDetails(this.userName);
    this.router.navigate(['/todo-list']);

  }

  
}