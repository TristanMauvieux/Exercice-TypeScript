import * as chai from "chai";
import * as mauka from '../mock/mockFormateur.json';
import { Formateur, Connaissance } from "../entity/formateur";

const expect = chai.expect;
const mocka = <Formateur>mauka;


describe("formateur",()=>{
    describe("enseigner()",()=>{
        it("",()=>{
            
            let forms = [];
            for(let i = 0; i< mocka.length; i++){
                let entiter = mocka[i];
                let connaissances = mocka[i].connaissances;
                let listeConnaissance = [];
                for(let j = 0; j< connaissances.length; j++){
                    listeConnaissance.push(new Connaissance(connaissances[j].nom, connaissances[j].anneeExperience));
                }
                
                forms.push(new Formateur(entiter.nom,entiter.prenom,entiter.genre,listeConnaissance));
            }
            let enseignant = [];
            forms.forEach(formateur => {
                enseignant.push(formateur.enseigner());
                
            });
        });
    });
});