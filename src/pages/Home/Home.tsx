import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home.css';

type Movie = {
  id: number;
  backdrop_path: string;
  poster_path?: string;
  overview?: string;
  title?: string;
  name?: string;
  original_title?: string;
  original_name?: string;
  release_date?: string;
  first_air_date?: string;
};

type HomeProps = {
  data: Movie[] | undefined;
};

function Home({ data }: HomeProps) {
  if (!data) return <div className="mp-loading">Loading...</div>;

  const featured = data[0];
  const rest = data.slice(1);

  return (
    <div className="background">
      {featured && (
        <div
          className="hero"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${featured.backdrop_path})`,
          }}
        >
          <div className="hero__content">
            <h1 className="hero__title">
              {featured.original_title ?? featured.title ?? featured.original_name ?? featured.name}
            </h1>
            {featured.overview && <p className="hero__overview">{featured.overview}</p>}
            <div className="hero__actions">
              <Link to={`/movie/${featured.id}`} state={featured} className="hero__btn hero__btn--primary">
                ▶ Play
              </Link>
              <Link to={`/movie/${featured.id}`} state={featured} className="hero__btn hero__btn--secondary">
                More Info
              </Link>
            </div>
          </div>
          <div className="hero__fade" />
        </div>
      )}

      <h2 className="row-title">Popular on Movie+</h2>
      <div id="card-container">
        {rest.map((m) => (
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
    </div>
  );
}

export default Home;
