import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import getApi from './api';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

function App() {
  type T={
    adult?:boolean;
    backdrop_path?:string;
    first_air_date?:string;
    genre_ids?:[number];
    id?:number;
    name?:string;
    origin_country?:string;
    original_language?:string;
    original_name?:string;
    overview?:string;
    popularity?:number;
    poster_path?:string;
    vote_average?:number;
    vote_count?:number;
    media_type?:string;
  }
  const [movies,setMovies] =useState<T>()
  useEffect(()=>{
    getApi().then((q)=>setMovies(q.results))
    
  },[])
  // console.log(movies)
  // console.log(getApi())
  return (
    <>
    <Routes>
      <Route path='/'element={<Home movies={movies}/>} />
      <Route path='/movie'element={<Search/>} />
    </Routes>
    </>
  );
}

export default App;
