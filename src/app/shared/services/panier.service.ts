import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  constructor() {
    let panier = JSON.parse(localStorage.getItem('produit') || 'null');
    if (!panier) {
      panier = [];
    }
    this.itemsSubject.next(panier);
  }
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$ = this.itemsSubject.asObservable();

  isExistProduit(produit: any, id: number) {
    return produit.find((pro: any) => {
      return pro.id === id;
    });
  }

  addToPanier(produit: any) {
    this.items$.pipe(
      take(1),
      map((produits) => {
        // console.log(produits);
        if (!this.isExistProduit(produits, produit.id)) {
          produit.quantite = 1
          produits.push(produit);
        }
        else {
          produits.forEach((element: any) => {
            element.quantite = Number(element.quantite)
            element.quantite += 1
          });
        }
        localStorage.setItem('produit', JSON.stringify(produit));
      }),
    ).subscribe();
  }

  removeFromCart(produit: any) {
    this.items$.pipe(
      take(1),
      map((produits) => {
        if (produits.includes(produit)) {
          const qte = produits.find((qte: { id: number }) => qte.id == produit.id);
          if (qte) {
            let index = produits.findIndex((qte: any) => qte.id == produit.id);
            produits.splice(index, 1)
            localStorage.setItem('produit', JSON.stringify(produit));
          }
        }
      }),
    ).subscribe();
  }

  increment(product: Produit, quantite: any) {
    this.items$.pipe(
      take(1),
      map((produit) => {
        produit.forEach((element: any) => {
          if (element.id === product.id) {
            element.quantite = quantite;
          }
        });
        localStorage.setItem('produit', JSON.stringify(produit));
      })
    )
      .subscribe();
  }

  PricePanier() {
    let tab = 0
    this.items$.pipe(
      map((produit) => {
        produit.forEach((element: any) => {
          tab += (element.prix * element.quantite)
        });
        localStorage.setItem('produit', JSON.stringify(produit));
      })
    ).subscribe();
    return tab
  }
}
