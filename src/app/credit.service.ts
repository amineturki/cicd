import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { api } from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  api = api;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getFormulas(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api + "dari/credit/banks/getf",  this.httpOptions).pipe(catchError(this.handleError))
  }

  addCredit(data:any , id:any):Observable<any>{
    return this.httpClient.post<any>(this.api+'dari/credit/credits/creditformulas/'+id+'/addcredit' , data, this.httpOptions );
  }

  getCredits(){
    return this.httpClient.get<any[]>(this.api + "dari/credit/credits/get",  this.httpOptions).pipe(catchError(this.handleError))
  }
  updateCredit(credit:any , formule:any):Observable<any>{
    return this.httpClient.put<any>(this.api+'dari/credit/credits/'+credit+'/creditformulas/'+formule+'/modify', this.httpOptions );
  }
  exportPDF(id){
    return this.httpClient.get<any>(this.api+"dari/credit/credits/afficherPDF/"+id , this.httpOptions);
  }
  deletecredit(id){
    return this.httpClient.delete<any>(this.api+"dari/credit/credits/remove/"+id , this.httpOptions);
  }
  

  handleError(eResponse: HttpErrorResponse) {
    if (eResponse.error instanceof ErrorEvent) {
      console.log("Client Side Error =" + eResponse.error.message);
    }
    else {
      console.log("Server Side Error =" + eResponse.error.message)
    }
    return throwError(eResponse.error.message)
  }

}
