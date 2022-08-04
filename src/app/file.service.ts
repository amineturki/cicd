import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
private server = 'http://20.124.46.10:8081'
  constructor(private http: HttpClient) { }

  upload(formData: FormData, id: any): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.server}/file/upload/${id}`, formData,{
      reportProgress: true,
      observe: 'events'
    });
  }

  uploadA(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.server}/file/upload`, formData,{
      reportProgress: true,
      observe: 'events'
    });
  }

  download(filename: string): Observable<HttpEvent<Blob>> {
    return this.http.get(`${this.server}/file/download/${filename}`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }

}
