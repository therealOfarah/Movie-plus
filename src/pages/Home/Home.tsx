import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home.css'
function Home(movie:any) {
  let arr = []
  for (const property in movie) {
    arr.push((movie[property]))
  } 
  const data = arr[0] 
  return (
    <div id="card-container">
      {data?.map((m:any)=>
        <>
        <div className="card" style={{width: "18rem"}} key={m.id} >
          <img src={`${`https://image.tmdb.org/t/p/w500/${m.backdrop_path}`}`}  className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{m.original_title}</h5>
            <p className="card-text">{m.release_date}</p>
            <Link to={`/movie/${m.id}`} state={m}><button className="btn btn-primary">Continue</button></Link>
          </div>
        </div>
        </>
        )}
    </div>
  );
}

export default Home;