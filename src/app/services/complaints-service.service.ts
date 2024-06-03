import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../models/complaints';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsServiceService {

  constructor(private http:HttpClient) { }

  getComplaintSet(page:number, limit: number): Observable<any[]>{
    let params = new HttpParams().set("_page", page.toString()).set("_limit", limit.toString());
    return this.http.get<any[]>(`${environment.apiUrl}${environment.apiEndpoints.complaints}`, {params})
  }

  getAllComplaints():Observable<Complaint[]>{
    return this.http.get<Complaint[]>(`${environment.apiUrl}${environment.apiEndpoints.complaints}`);
  }

}
