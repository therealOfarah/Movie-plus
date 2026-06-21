import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home.css';

type Movie = {
  id: number;
  backdrop_path: string;
  title?: string;
  name?: string;
  original_name?: string;
  release_date?: string;
  first_air_date?: string;
};

type HomeProps = {
  data: Movie[] | undefined;
};

function Home({ data }: HomeProps) {
  if (!data) return <div>Loading...</div>;

  return (
    <div id="card-container">
      {data.map((m) => (
        <div className="movie-card" key={m.id}>
          <Link to={`/movie/${m.id}`} state={m}>
            <img
              className="img-fluid movie-img"
              src={`https://image.tmdb.org/t/p/w440_and_h660_face/${m.backdrop_path}`}
              alt="Movie"
            />
          </Link>
          <div className="movie-description p-3 d-flex justify-content-between align-items-center">
            <h5 className="movie-title">{m.original_name ?? m.title ?? m.name}</h5>
            <p className="card-text">{m.release_date ?? m.first_air_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
