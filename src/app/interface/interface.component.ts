import { Component, Injectable } from '@angular/core';
import { UserStore } from '../shared/stores/user-store';
import { map } from 'rxjs';


@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {

  

  constructor(
    private userStore : UserStore
  ){
    
  }

  public userDetails$ = this.userStore.userDetails$
  .pipe(
    map(data => {
      if(data){
        return data;
      }
      else{
        return data;
      }
    }
    )
  )
  

  public ngOnInit() : void {

    
   
  }

  
}