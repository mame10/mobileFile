import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Catalogue } from '../shared/models/catalogue';
import { Produit } from '../shared/models/produit';
import { CatalogueService } from '../shared/services/catalogue.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produi:Produit[]|undefined=[]
  catalogue : Catalogue|null=null
 //  catalogues: Produit[]=[]

slideOpts = {
  initialSlide: 1,
  speed: 400,
  loop: true,
  autoplay: {
        delay: 4000
  }
  }
   constructor(private serv:CatalogueService,public router:Router) { }
   ngOnInit(): void {
     this.serv.all().subscribe((data) =>{
       this.catalogue = data
       this.produi=data.produits
      //  console.log(this.produi);
       // this.catalogues=this.catalogue.produits
       
     }
      )
     // this.catalogue$= this.serv.all()
   }
 
   filtreProduit(para: string){
    // alert('oksn')
     switch(para){
       case 'burger':
         this.produi=this.catalogue.burger;
         break;
       case 'menu':
         this.produi=this.catalogue.menu;
         break;  
        default:
          this.produi=this.catalogue.produits;
          break;
     }
   }
 
   price(prod:any){
    // console.log(prod.detail.value);
    this.produi=this.produi.filter(
      data  => {
        return data.prix >= prod.detail.value.lower && data.prix <= prod.detail.value.upper
      }
    )
    
    
   }
}
