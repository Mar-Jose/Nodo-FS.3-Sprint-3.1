import express from 'express';
import {
    obtenerSuperHeroePorIdController,
    obtenerTodosLosSuperHeroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperHeroesMayoresDe30Controller,
    //Requerimientos del sprint 3. tp 1:
    crearSuperheroeController,
    actualizarSuperheroeController,
    eliminarSuperheroexIdController,
    eliminarSuperheroexNombreController
} from '../controllers/superHeroesController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperHeroesController);
router.get('/heroes/:id', obtenerSuperHeroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperHeroesMayoresDe30Controller);
//Requerimientos del sprint 3. tp 1:
router.post('/heroes', crearSuperheroeController);
router.put('/heroes/id/:id', actualizarSuperheroeController);
router.delete('/heroes/id/:id', eliminarSuperheroexIdController);
router.delete('/heroes/nombre/:nombre', eliminarSuperheroexNombreController);
                               
export default router;