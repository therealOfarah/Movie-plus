import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchApi } from '../../api';
function Search() {
  const [movie,setMovie]= useState<any>()
  const [formData, setFormData] = useState({query: ''})

  const handleChange = (evt: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData,[evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault()
    // props.handleWorkoutSearch(formData)
    searchApi(formData.query).then((q)=>setMovie(q))
  }
  console.log(movie)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="query" 
          type="text"  
          autoComplete="off"
          value={formData.query}
          onChange={handleChange}
          className="form-control"
          placeholder="Pick a Body Part to Work"
        />
        <button className="btn btn-light"type="submit">Search</button>
      </form>
      <div>
      {movie?.map((m:any)=>
        <>
        <img src={`${`https://image.tmdb.org/t/p/w500/${m.backdrop_path}`}`} alt="" />
        <Link to=''><h1>{m.original_title}</h1></Link>
        <h3>{m.release_date}</h3>
        {m.poster_path} 
        <small>{m.first_air_date} - {m.release_date}</small>
        </>
      )}
      </div>
      {/* adult:boolean;
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
    media_type:string; */}
    </>
  );
}

export default Search;