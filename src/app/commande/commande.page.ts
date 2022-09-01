import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from '../shared/models/commande';
import { CommandeService } from '../shared/services/commande.service';
import { TokenService } from '../shared/services/token.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {

  constructor(private service:CommandeService,private routes:ActivatedRoute,private tokenservice:TokenService) { 
  }
commande:Commande[]=[]
 async ngOnInit() {
    const detailurl=this.routes.snapshot.params['id']
    const token= await this.tokenservice.getToken()
    this.service.getUser(token,detailurl).subscribe(
      data =>{
        let datas=data["hydra:member"] 
        this.commande=datas;
        // return datas;  
      }
    )
  }
}
