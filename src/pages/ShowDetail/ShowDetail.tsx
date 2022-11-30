import React, { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { showRecommendationsApi} from '../../api';
import '../../styles/detail.css'
function ShowDetail() {
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
  const [recs,setRecs]=useState<T | any>()
  const location  = useLocation()
  const data = location.state
  useEffect(() => {
    showRecommendationsApi(data.id).then((q)=>setRecs((q)))
  }, [data.id])
  console.log(recs)
  return (
    <>
    <div >
      <img id="image" src={`${`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}`}  className="card-img-top" alt="..."/>
      <h3 style={{textAlign:'center', color:'red'}}>{data.original_title}</h3>
      <p style={{textAlign:'center', color:'black',fontSize:'30px'}}>{data.overview}
      </p>
      <h2 style={{textAlign:"center", marginTop:"5vh"}}>Other Show's like {data.original_title}</h2>
    </div>
    <div id="card-container">
      {recs?.map((m:any)=>
        <>
        <div className="card" style={{width: "18rem"}} key={m.id} >
          <img src={`${`https://image.tmdb.org/t/p/w500/${m.backdrop_path === (undefined || null) ? m.poster_path : m.backdrop_path}`}`}  className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{ m.original_name === undefined ? m.title:m.name}</h5>
            <p className="card-text">{m.release_date === undefined ? m.first_air_date:m.release_date}</p>
            <Link to={`/movie/${m.id}`} state={m}><button className="btn btn-primary">Continue</button></Link>
          </div>
        </div>
        </>
        )}
    </div>
    </>

  );
}

export default ShowDetail;