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
    // falta una función más sus comentarios importantes.
    }
export default new SuperHeroRepository;