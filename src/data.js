import data from './data/ghibli/ghibli.js';

export function obtenerPeliculas() {
  return data.films;
}

// function ordenarData (films, recientesAño, azza){
// films.sort((a,b) =>{
// if(recientesAño)
// })
// }
// export function obtenerAño(films) {
//   const añosObtenidos = films.filter(film => film.release_date )
//  comparar si films.realse_date es igual, mayor o menor al dato que queremos obtener//
//   return añosObtenidos;
// }

// export function obtenerPopularidad(films) {
//   const popularidadObtenida = films.map(film => Number(film.rt_score))
//   return popularidadObtenida;
// }

export function filtrarDirectores(films, director) {
  const filtroDirector = films.filter(film => film.director === director)
  return filtroDirector
}

export function filtrarTitulo(films, titulo) {
  const filtroTitulo = films.filter(film => film.title.includes(titulo))
  return filtroTitulo
}

export function filtrarMasRecientes(films) {
  const filtroMasRecientes = films.filter(film => film.release_date >= 2000)
  return filtroMasRecientes;
}

export function filtrarRecientes(films) {
  const filtroRecientes = films.filter(film => film.release_date >= 1990 && film.release_date < 2000)
  return filtroRecientes;
}

export function filtrarMenosRecientes(films) {
  const filtroRecientes = films.filter(film => film.release_date >= 1980 && film.release_date < 1990)
  return filtroRecientes;
}

export function filtrarMasPopulares(films) {
  const filtroMasPopulares = films.filter(film => film.rt_score >= 90)
  return filtroMasPopulares;
}

export function filtrarMenosPopulares(films) {
  const filtroMenosPopulares = films.filter(film => film.rt_score >= 0 && film.rt_score < 90)
  return filtroMenosPopulares;
}

