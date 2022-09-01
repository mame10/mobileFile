export interface User {
    id?:number
    prenom:string
    nom:string
    adresse:string
    telephone:string
    username:string
    password:string
    role:string
}

export interface Token{
    token:string
    id : string
}