import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { recommendationsApi } from '../../api';
function MovieDetail() {
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
  const [recs,setRecs]=useState<T>()
  const location  = useLocation()
  const data = location.state
  console.log(data.title)
  recommendationsApi(data.id).then((q)=>console.log(q))
  return (
    <>
    <div>
      <img src={`${`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}`}  className="card-img-top" alt="..."/>
      <h3 style={{textAlign:'center', color:'red'}}>{data.original_title}</h3>
      <p style={{textAlign:'center', color:'black',fontSize:'30px'}}>{data.overview}
      </p>
      <button type="button" className="btn btn-primary">{data.genre_ids}</button>
    </div>
    </>

  );
}

export default MovieDetail;