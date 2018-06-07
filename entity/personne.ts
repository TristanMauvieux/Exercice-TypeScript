import {Boisson} from "./boisson";

export class Personne{
   nom : String;
   prenom : String;
   genre : boolean;

   constructor(nom:String, prenom:String, genre : boolean){
       this.nom = nom;
       this.prenom = prenom;
       this.genre = genre; 
   }

    boire(boisson:Boisson) {
        console.log("La boisson "+ boisson.nom+ "contient de l'alcool ? "+ boisson.alcool + "cette boisson est bio ?" + boisson.bio);
    }

    toString(){
        console.log(this.prenom + " "+ this.nom);
    }
}