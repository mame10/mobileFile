import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  hasperm:BehaviorSubject<boolean> = new BehaviorSubject(false)
  constructor(private storage: Storage,private route:Router) {
    this.storage.create();
  }

  save(token:string,id:any){
    let tokenn=this.getDecodedAccessToken(token)
    this.hasperm.next(true)        
    if (tokenn.roles[0] == 'ROLE_CLIENT') {
      this.route.navigate([id+'/commande'])
    } else if (tokenn.roles[0] == 'ROLE_LIVREUR') {
      this.route.navigate(['/'])
    }
    this.storage.set('token',token)
      
  }
  
  async getToken() {
    let tokens= await this.storage?.get('token');
    return tokens;
  }

   getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

     islogged(connect:string): boolean{
      const token = this.storage.get(connect)
      return !! token  
    }

    clearToken(): void {
      this.storage.remove('token')
      this.route.navigate(['/'])
    } 

}


  

 



