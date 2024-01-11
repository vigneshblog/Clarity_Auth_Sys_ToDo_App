import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TodoService {


  private baseUrl : string = "https://todolist.wiremockapi.cloud";



 
private options:{headers:HttpHeaders}

  constructor(
    private http: HttpClient,
  ) {
   
    this.options = this.getOptions();
  }


  /**
   * Service for Getting All Lists by User
   */

  public getToDoListByUser(req : any) : Observable<any> {

    
    //let url = this.baseUrl + "/getUsersTodo?user=" + req;
    //let url = this.baseUrl + "/getUsersTodo";
    let url = "https://todolist.wiremockapi.cloud/getUsersTodo?user=user2";
    
    let options = this.getOptions();
    let request$ = this.http.get<Observable<any>>(url, options)
      .pipe(
        map(response => {
          if (!response) {
            return null;
          }
          return response;
        }),
      );

    return request$;
  }

 /**
   * Service for Submitting Tasks
   */

 public submitTasks(req : any) : Observable<any> {

    
    //let url = this.baseUrl + "/getUsersTodo?user=" + req;
    //let url = this.baseUrl + "/getUsersTodo";
    let url = "https://todolist.wiremockapi.cloud/addToDo";
    
    let options = this.getOptions();
    let request$ = this.http.post<Observable<any>>(url, req, options)
      .pipe(
        map(response => {
          if (!response) {
            return null;
          }
          return response;
        }),
      );

    return request$;
  }

    /**
   * Stages our Http Request Headers
   */

    private getOptions() : { headers: HttpHeaders } { 
 
      const OPTIONS : { headers : HttpHeaders } = { 
        headers : new HttpHeaders() 
          .set('Content-Type', 'application/json')
      }; 
   
      return OPTIONS; 
    }

   

}


   