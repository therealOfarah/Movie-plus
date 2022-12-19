import * as tokenService from "../services/tokenServices";

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/movies`;

type T = {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: [number];
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
export async function saveMovie(movie: T) {
  const res = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  const data = await res.json();
  return data;
}
