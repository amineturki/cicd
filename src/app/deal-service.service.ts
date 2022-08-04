import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DealServiceService {
  private url = "http://20.124.46.10:8081/dari/AchatLocation"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  addDeal(deal: any, id: any): Observable<any[]> {
    return this.httpClient.post<any[]>(this.url + `/add/${id}` , JSON.stringify(deal), this.httpOptions).pipe(catchError(this.handleError))
  }

  getAllDeals(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url+ "/all")
  }

  getDealById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.url + "/id/" + id)
  }

  deleteDeal(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + "/remove" + "/" + id)
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
