import { Personne } from "./personne";

export class Formateur extends Personne {
    private connaissance : Array<Connaissance>

    constructor(nom:String, prenom:String, genre : boolean,connaissance : Array<Connaissance>){
        super(nom,prenom,genre);
        this.connaissance = connaissance;

    }

    enseigner(){
        let matiere : Array<Connaissance>;
        matiere = [];
        this.connaissance.forEach(c => {
            if(c.anneeExperience >= 2 ){
                matiere.push(c);
            }
        });

        return matiere;

    }
}

export class Connaissance {
    nom : string;
    anneeExperience : number;

    constructor (nom:string, experience : number){
        this.nom = nom;
        this.anneeExperience = experience;
    }
}