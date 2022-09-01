import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Detail } from '../shared/models/detail';
import { Produit } from '../shared/models/produit';
import { CatalogueService } from '../shared/services/catalogue.service';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  produi : Detail|null = null; 
  produit$:Observable<any>|undefined=undefined
  constructor(private serv :CatalogueService,private routes:ActivatedRoute,private servpanier:PanierService) { }
  
    ngOnInit(): void {
      const detailurl=this.routes.snapshot.params['id']
      this.produit$=this.serv.produit(detailurl)
      this.serv.produit(detailurl).subscribe(data =>{
        this.produi=data
        console.log(this.produi)
        
      }
        
        // console.log(data)
        )  
      // console.log(this.produit$);
      
    } 

    Panier(produit:Produit,quantite:any){
      produit['quantite']=quantite
      this.servpanier.addToPanier(produit)
    }

    get(menuTaille:any,quantite:any){
      menuTaille['quantite']=quantite
      console.log(menuTaille);
      
    }

}
