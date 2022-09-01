export interface Produit {
    id?:number
    image:Blob
    nom:string
    prix:number
    quantite?:number
    description?:string
    '@type':string
}