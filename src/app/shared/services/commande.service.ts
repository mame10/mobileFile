import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private urlclient:string = 'http://127.0.0.1:8000/api/users'
  constructor(private http:HttpClient) {}


  getUser(token:any,id:any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      })
    }
    return this.http.get<any>(this.urlclient +'/'+id+'/commandes',httpOptions)
  }

  
}
