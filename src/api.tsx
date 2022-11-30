// import React from 'react'

// GET suggestions from the api
export default async function getApi(){
  return await (await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_SECRET_NAME}`)).json()
    .then(result=>{
      return result
    })
}
// getApi().then((q)=>setMovies(q.results))
//Search movie from api
export async function searchApi(movie:string){
  return await (await fetch(`https://api.themoviedb.org/3//search/movie?api_key=${process.env.REACT_APP_SECRET_NAME}&query=${movie}`)).json()
    .then(result=>{
      return (result.results)
    })
}
//Search movie from api
export async function searchShowApi(movie:string){
  return await (await fetch(`https://api.themoviedb.org/3//search/tv?api_key=${process.env.REACT_APP_SECRET_NAME}&query=${movie}`)).json()
    .then(result=>{
      return (result.results)
    })
}
//get genre from api
export async function genreApi(){
  return await (await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_SECRET_NAME}&language=en-US`)).json()
    .then(result=>{
      return (result.results)
    })
}
//get recomendations
export async function recommendationsApi(a:number){
  return await (await fetch(`https://api.themoviedb.org/3/movie/${a}/recommendations?api_key=${process.env.REACT_APP_SECRET_NAME}&language=en-US&page=1`)).json()
    .then(result=>{
      return(result.results)
    })
}
//get Show recomendations
export async function showRecommendationsApi(a:number){
  return await (await fetch(`https://api.themoviedb.org/3/tv/${a}/recommendations?api_key=${process.env.REACT_APP_SECRET_NAME}&language=en-US&page=1`)).json()
    .then(result=>{
      return(result.results)
    })
}




