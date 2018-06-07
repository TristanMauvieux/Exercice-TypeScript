export class Boisson{
    nom : string;
    alcool : boolean;
    bio: boolean;

    constructor( nom:string, alcool:boolean, bio:boolean ){
        this.nom = nom;
        this.alcool = alcool;
        this.bio = bio;
    }
}