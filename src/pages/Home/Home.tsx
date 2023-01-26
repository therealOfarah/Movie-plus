import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home.css'
function Home(movie:any) {
  let arr = []
  for (const property in movie) {
    arr.push((movie[property]))
  } 
  const data = arr[0] 
  console.log(data)
  return (
    <div id="card-container">
      {data?.map((m:any)=>
        <>
        <div className="movie-card">
        <Link to={`/movie/${m.id}`} state={m}>
          <img
            className="img-fluid movie-img"
            src={`${`https://image.tmdb.org/t/p/w440_and_h660_face/${m.backdrop_path}`}`}
            alt="Sorry, something went wrong"
            />
          </Link>
            <div
              className="movie-description p-3 d-flex justify-content-between align-items-center"
            >
              <h5 className="movie-title">{ m.original_name === undefined ? m.title:m.name}</h5>
              <p className="card-text">{m.release_date === undefined ? m.first_air_date:m.release_date}</p>
            </div>
          </div>
        </>
        )}
    </div>
  );
}

export default Home;