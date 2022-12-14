// import React from 'react'
// GET suggestions from the api
export default async function getApi(){
  return (await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_SECRET_NAME}`)).json()
  .then(result=>{
    return result
  })
}
// getApi().then((q)=>setMovies(q.results))
//Search movie from api
export async function searchApi(movie:string){
  return (await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_SECRET_NAME}&query=${movie}`)).json()
  .then(result=>{
    return (result.results)
  })
}
//Search movie from api
export async function searchShowApi(movie:string){
  return (await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_SECRET_NAME}&query=${movie}`)).json()
  .then(result=>{
    return (result.results)
  })
}
//get genre from api
export async function genreApi(){
  return (await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_SECRET_NAME}&language=en-US`)).json()
  .then(result=>{
    return (result.results)
  })
}
//get recomendations
export async function movieRecommendationsApi(a:number){
  return (await fetch(`https://api.themoviedb.org/3/movie/${a}/recommendations?api_key=${process.env.REACT_APP_SECRET_NAME}&language=en-US`)).json()
  .then(result=>{
    console.log(result.results)
    return(result.results)
  })
}
//get Show recomendations
export async function showRecommendationsApi(a:number){
  return (await fetch(`https://api.themoviedb.org/3/tv/${a}/recommendations?api_key=${process.env.REACT_APP_SECRET_NAME}&language=en-US`)).json()
  .then(result=>{
    return(result.results)
  })
}
export async function getTrailer(a:number){
  return (await fetch(`https://api.themoviedb.org/3/movie/${a}/videos?api_key=${process.env.REACT_APP_SECRET_NAME}&language=en-US`)).json()
  .then(result=>{
    return(result.results)
  })
}