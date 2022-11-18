import React from 'react';
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
function Home(movies:any) {
  console.log(movies)
  return (
    <div>
      {movies?.map((movie:any)=>
        <>
        <h2>{movie.name}</h2>
        </>
      )}
    
    </div>
  );
}

export default Home;