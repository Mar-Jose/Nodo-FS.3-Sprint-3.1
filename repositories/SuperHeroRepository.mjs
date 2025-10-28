//Implementa acceso real a mongoDB

import superHero from "../models/superHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await superHero.findById(id);
    }

    async obtenerTodos() {
        return await superHero.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        return await superHero.find({ [atributo]: valor });
    }
    async obtenerMayoresDe30() {
       // return await superHero.find({edad: { $gt: 30 }, planetaOrigen: "Tierra", $expr: { $eq: [ {$size: { $ifNull: [ "$poderes", [] ]}}, 1 ]} });
    const superheroefiltrado= await superHero.find({edad: { $gt: 30 }, planetaOrigen: "Tierra", $expr: { $eq: [ {$size: { $ifNull: [ "$poderes", [] ]}}, 1 ]} });
    console.log ("estoy en la capa persistencia, clase superherorepositorio, función obtener mayores de 30 que devuelve superheroefiltrado " + superheroefiltrado );
    return superheroefiltrado;
    // eq: igual. lt= menos que. gt: mayor que. gte=mayor o igual que. 
    }
}
export default new SuperHeroRepository;