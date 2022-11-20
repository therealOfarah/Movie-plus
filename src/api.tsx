// import React from 'react'
const configValue : string | undefined = process.env.REACT_APP_SECRET_NAME
// GET suggestions from the api
export default async function getApi(){
  return await (await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${configValue}`)).json()
    .then(result=>{
      return result
    })
}
// getApi().then((q)=>setMovies(q.results))
//Search movie from api
export async function searchApi(movie:string){
  return await (await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${configValue}&query=${movie}`)).json()
    .then(result=>{
      return (result.results)
    })
}
//get genre from api
export async function genreApi(){
  return await (await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${configValue}&language=en-US`)).json()
    .then(result=>{
      return (result.results)
    })
}
//get recomendations
export async function recommendationsApi(a:number){
  return await (await fetch(`https://api.themoviedb.org/3/movie/${a}/recommendations?api_key=${configValue}&language=en-US&page=1`)).json()
    .then(result=>{
      return(result.results)
    })
}




