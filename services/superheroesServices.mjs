import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

export async function obtenerSuperHeroePorId(id) {
    return await SuperHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperHeroes() {
    return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperHeroePorAtributo(atributo, valor) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperHeroesMayoresDe30() {
    return await SuperHeroRepository.obtenerMayoresDe30();
}

// sprint 3. tp1.
export async function crearSuperHeroes(valor) {
    return await SuperHeroeRepository.crearHeroe(valor);
}


export async function actualizarSuperHeroes(id, valor) {
    return await SuperHeroeRepository.actualizarHeroe(id, valor);
}


export async function eliminarSuperHeroesxId(id) {
    return await SuperHeroeRepository.eliminarHeroexId(id);
}


export async function eliminarSuperHeroesxNombre(nombre) {
    return await SuperHeroeRepository.eliminarHeroexNombre(nombre);
}