import { Stagiaire } from "./stagiaire";
import { Formateur } from "./formateur";

class Formation {
    nom : string;
    dateDebut : Date;
    dateFin : Date;
    stagiaires : Array<Stagiaire>;
    formateurs : Array<Formateur>;

    constructor(nom : string, dateDebut:Date, dateFin:Date, stagiaires:Array<Stagiaire>,formateurs : Array<Formateur>){
        this.nom = nom;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.stagiaires = stagiaires;
        this.formateurs = formateurs;
    }
}