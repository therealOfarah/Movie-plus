import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import getApi from './api';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import Movie from './pages/Movie/Movie';
import Show from './pages/Show/Show';
import ShowDetail from './pages/ShowDetail/ShowDetail';
function App() {
  type T={
    adult:boolean;
    backdrop_path:string;
    first_air_date:string;
    genre_ids:[number];
    id:number;
    name:string;
    origin_country:string;
    original_language:string;
    original_name:string;
    overview:string;
    popularity:number;
    poster_path:string;
    vote_average:number;
    vote_count:number;
    media_type:string;
  }
  const [movies,setMovies] =useState<T>()
  useEffect(()=>{
    getApi().then((q)=>setMovies(q.results))
  },[])
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/'element={<Home state={movies}/>} />
      <Route path='/movie'element={<Movie/>} />
      <Route path='/movie/:id'element={<MovieDetail />} />      
      <Route path='/show'element={<Show />} />
      <Route path='/show/:id'element={<ShowDetail />} />
    </Routes>
    </>
  );
}

export default App;
