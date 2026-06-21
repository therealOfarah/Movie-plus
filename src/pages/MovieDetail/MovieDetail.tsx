import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { movieRecommendationsApi, getTrailer } from '../../api';
import '../../styles/detail.css';

type Props = {
  handleSaveMovie: (data: any) => void;
  user: any;
};

type Movie = {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  media_type: string;
};

function MovieDetail({ handleSaveMovie, user }: Props) {
  const [recs, setRecs] = useState<Movie[]>([]);
  const [preview, setPreview] = useState<any[]>([]);
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    movieRecommendationsApi(data.id).then(setRecs);
    getTrailer(data.id).then(setPreview);
  }, [data.id]);

  const trailer = preview.find((item) => item.name === 'Official Trailer');
  const trailerKey = trailer?.key;

  return (
    <>
      <div>
        <div
          className="sage"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.poster_path})`,
            backgroundSize: 'cover',
            overflow: 'hidden',
          }}
        >
          <img
            id="image"
            src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
            className="card-img-top"
            alt="Movie backdrop"
          />
        </div>

        <h3 style={{ textAlign: 'center', color: 'red' }}>{data.original_title}</h3>
        <p style={{ textAlign: 'center', color: 'black', fontSize: '30px' }}>
          {data.overview}
        </p>

        {trailerKey && (
          <>
            <h3 style={{ textAlign: 'center', marginTop: '5vh' }}>Trailer</h3>
            <iframe
              id="trailer"
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded YouTube Trailer"
            />
          </>
        )}

        {user?.profile && (
          <button
            className="btn btn-outline-primary"
            style={{ display: 'block', margin: '5vh auto 0' }}
            onClick={() => handleSaveMovie(data)}
          >
            Save Me
          </button>
        )}
      </div>

      {recs?.length > 0 && (
        <>
          <h2 style={{ textAlign: 'center', marginTop: '5vh' }}>You might also like</h2>
          <div id="card-container">
            {recs.map((m: any) => (
              <div className="movie-card" key={m.id}>
                <Link to={`/movie/${m.id}`} state={m}>
                  <img
                    className="img-fluid movie-img"
                    src={`https://image.tmdb.org/t/p/w440_and_h660_face/${m.backdrop_path}`}
                    alt={m.title || m.name}
                  />
                </Link>
                <div className="movie-description p-3 d-flex justify-content-between align-items-center">
                  <h5 className="movie-title">{m.original_name ?? m.title}</h5>
                  <p className="card-text">{m.release_date ?? m.first_air_date}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default MovieDetail;
