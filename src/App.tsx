import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import getApi from './api';
import Search from './pages/Search/Search';

function App() {
  // type T={
  //   adult:boolean;
  //   backdrop_path:string;
  //   first_air_date:string;
  //   genre_ids:[number];
  //   id:number;
  //   name:string;
  //   origin_country:string;
  //   original_language:string;
  //   original_name:string;
  //   overview:string;
  //   popularity:number;
  //   poster_path:string;
  //   vote_average:number;
  //   vote_count:number;
  //   media_type:string;
  // }
  // const [movies,setMovies] =useState<T>()
  const data = getApi()
  console.log(data)
  // console.log(getApi())
  return (
    <>
    <Routes>
      <Route path='/movie'element={<Search/>} />
    </Routes>
    </>
  );
}

export default App;
