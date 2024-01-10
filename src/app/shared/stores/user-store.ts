/* Angular Import */
import { Injectable }             from '@angular/core';
import { BehaviorSubject } from 'rxjs';
/* Feature Imports */



/**
 * Feature specific stores are Angular Injectables extending the abstract OuxStore (i.e., class):
 */
@Injectable({ providedIn: 'root' })
export class UserStore {

    

    public userDetails : any ;

    private userDetailsSubject = new BehaviorSubject<any>(null);
    public userDetails$ = this.userDetailsSubject.asObservable();


    


  constructor() {
  }
  

  /**
   * ============================================================
   * Set User Details
   */
   public setUserDetails(data : any) : void {

    this.userDetails = data;
    this.userDetailsSubject.next(data);
    

  }


  
  
  /**
   * Get User Details Items
   */
   public getUserDetails(): any {
    return this.userDetails;
  }

  
  
  /**
   * Clear User Details 
   * ============================================================
   */
  public clearUserDetails(): void {
        this.userDetails = null;
  }

}