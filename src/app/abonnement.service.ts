import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Abonnement } from './abonnement';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  constructor(private http: HttpClient) { }
  public getAllAbonnements() {
    return this.http.get("http://20.124.46.10:8081/dari/abonnement/retrive-all-Abonnements");
  }

  public deleteAbonnement(id:number) {
    return this.http.delete("http://20.124.46.10:8081/dari/abonnement/delete-Abonnement/" + id);
  }



  public AddAbonnement(a:Abonnement) {

    return this.http.post("http://20.124.46.10:8081/dari/abonnement/add-Abonnement",a,{responseType:'text' as 'json'},)
  }
}
