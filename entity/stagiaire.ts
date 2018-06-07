import { Personne } from "./personne";

export class Stagiaire extends Personne{

    certification : Array<Certification>;

    constructor(nom:String, prenom:String, genre : boolean, certification : Array<Certification>){
        super(nom,prenom,genre);
        this.certification = certification;
    }

}

class Certification{
    nom : string;
    anneeObtention : number;

    constructor(nom:string, anneeObtentien:number){
        this.nom = nom;
        this.anneeObtention = anneeObtentien;
    }
}