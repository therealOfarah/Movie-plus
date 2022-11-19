import React from 'react';
import { useLocation } from 'react-router-dom';
function MovieDetail() {
  const location  = useLocation()
  const data = location.state
  console.log(data)
  return (
    <div>
      <img src={`${`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}`}  className="card-img-top" alt="..."/>
      <h3 style={{textAlign:'center', color:'red'}}>{data.original_title}</h3>
      <p style={{textAlign:'center', color:'black',fontSize:'30px'}}>{data.overview}
      </p>
      <button type="button" className="btn btn-primary">{data.genre_ids}</button>
    </div>
  );
}

export default MovieDetail;