// import React from 'react'
// GET suggestions from the api
export default async function getApi(){
  return await (await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_API_KEY}`)).json()
    .then(result=>{
      return (result.results)
    })
}
//Search movie from api
export async function searchApi(movie:string){
  return await (await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_API_KEY}&query=${movie}`)).json()
    .then(result=>{
      return (result.results)
    })
}
//get genre from api
export async function genreApi(){
  return await (await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_API_KEY}&language=en-US`)).json()
    .then(result=>{
      return (result.results)
    })
}




