import React, { useEffect, useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { searchApi} from '../../api';
import '../../styles/home.css'
function Search() {
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
    searchApi(formData.query).then(q=>setMovie(q))
    // setMovie([state])
  }, [formData.query, state])
  console.log(state)
  return (
    <>
    <div className="background">
      <form onSubmit={handleSubmit}>
        <input 
          name="query" 
          type="text"  
          autoComplete="off"
          value={formData.query}
          onChange={handleChange}
          className="form-control"
          placeholder="What should we watch?"
        />
        {/* <button className="btn btn-light"type="submit">Search</button> */}
      </form>
      <div id="card-container">
      {movie?.map((m:any)=>
        <>
        <div className="card" style={{width: "18rem"}} key={m.id}>
          <img src={`${`https://image.tmdb.org/t/p/w500/${m.backdrop_path}`}`}  className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{m.name}</h5>
            <p className="card-text">{m.release_date}</p>
            <Link to={`/movie/${m.id}`} state={m}><button className="btn btn-primary">Continue</button></Link>
          </div>
        </div>
        </>
      )}
      </div>
    </div>
    </>
  );
}

export default Search;