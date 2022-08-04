import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Abonnement } from './abonnement';
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";




@Injectable({
  providedIn: 'root'
})


export class UserAbonnementServiceService {

  constructor(private http: HttpClient) { }
  public acheteAbonnement(abonnement:Abonnement) {
    return this.http.post("http://20.124.46.10:8081/dari/abonnement/add-Abonnement", abonnement, { responseType: 'Text' as 'json' });
  }

}
