import React, { useEffect, useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { searchShowApi} from '../../api';
import '../../styles/home.css'
function Show() {
  const [movie,setMovie]= useState<any>()
  const [formData, setFormData] = useState({query: ''})
  const { state } = useLocation();
  const handleChange = (evt: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData,[evt.target.name]: evt.target.value})
  }
  const handleSubmit = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault()
  }
  useEffect(()=>{
    searchShowApi(formData.query).then(q=>setMovie(q))
    // setMovie([state])
  }, [formData.query, state])
  console.log(movie)
  return (
    <>
    <div className="background">
    <form onSubmit={handleSubmit} className="search-container">
      <input type="text" id="search-bar" name="query"   
          autoComplete="off"
          value={formData.query}
          onChange={handleChange}
          className="form-control"
          placeholder="What should we watch?"/>
      </form>
      <div id="card-container">
      {movie?.map((m:any)=>
        <>
        <div className="movie-card">
        <Link to={`/show/${m.id}`} state={m}>
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
    </div>
    </>
  );
}

export default Show;