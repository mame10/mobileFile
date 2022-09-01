import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { User } from '../shared/models/user';
import { LoginService } from '../shared/services/login.service';
import { TokenService } from '../shared/services/token.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  forms: User = {
    prenom: '',
    nom: '',
    adresse: '',
    telephone: '',
    username: '',
    password: '',
    role: ''
  }


  constructor(private route: Router, private service: LoginService, private tokenservice: TokenService) {

  }

  ngOnInit(): void { }

  onSubmitForm(): void {
    this.service.login(this.forms).subscribe(
      data => {
        this.tokenservice.save(data.token,data.id)

      }
    )
  }

  userConnected(){
    this.service.login(this.forms).subscribe(
      data =>{
        var user=this.tokenservice.getDecodedAccessToken(data.token);
        if(user.roles[0]== 'ROLE_CLIENT'){
          return true;
        }
        return false;
      })
  }

  isClient():boolean{
    if(!this.userConnected)
    return true;
  }

  isLivreur():boolean{
    if(!this.userConnected)
    return true;
  }

}
