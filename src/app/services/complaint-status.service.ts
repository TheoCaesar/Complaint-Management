import { Injectable } from '@angular/core';
import { Status } from '../models/complaints';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComplaintStatusService {

  constructor(private http:HttpClient) { }

  getAllStatuses():Observable<Status[]> {
    return this.http.get<Status[]>(`${environment.apiUrl}${environment.apiEndpoints.status}`)
  }
}
