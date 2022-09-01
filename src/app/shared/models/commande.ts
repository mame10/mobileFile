import { Produit } from "./produit"

export interface Commande{
    id? : number
    numero: string
    date: Date
    zone?: string
    telephone?:string
    montant?:number
    etat?:string
    burgerCommandes?:BurgerCommandes[]
    menuCommandes?:MenuCommandes[]
    portionCommandes?:PortionCommandes[]
    commandeTailleBoissons?:CommandeTailleBoissons[]
}


export interface BurgerCommandes{
    quantite:number
    burger:Produit
}

export interface MenuCommandes{
    quantite:number
    menu:Produit
}

export interface PortionCommandes{
    quantite:number
    portions:Produit
}

export interface CommandeTailleBoissons{
    quantite:number
   
}