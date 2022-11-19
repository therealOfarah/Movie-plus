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
    searchApi(formData.query).then((q)=>setMovie(q))
  }
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
        <div className="card" style={{width: "18rem"}}>
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
    </>
  );
}

export default Search;