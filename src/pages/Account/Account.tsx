import React from 'react';
import { useEffect,useState } from 'react';
import * as profileService from '../../services/profileService'
import '../../styles/account.css'
type Props={
  savedMovie:any;
  user:any;
}
function Account(props:Props) {
  const id = props.user.profile
  const[profile,setProfile] = useState<any>()
  const[movie,setMovie] = useState([])
  const[shows,setShows] = useState([])
  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfileDetails(id)
      setProfile(profileData)
      setMovie(profileData.movies)
      setShows(profileData.shows)
    }
    fetchProfile()
  }, [id])
  const handleRemoveMovie = async (id:number)=>{
    await profileService.deleteMovie(id)
    setMovie(movie.filter((movie:any)=>movie._id !== id))
  }
  const handleRemoveShow = async (id:number)=>{
    await profileService.deleteShow(id)
    setShows(shows.filter((show:any)=>show._id !== id))
  }
  return (
    <div>
      <h3 style={{textAlign:"center"}}>{profile?.name}</h3>
      <ol>
        <div id="card-container">
      {movie.map((m:any)=>
        <div className="card" style={{width: "18rem"}} key={m?.id}>
          <img src={`${`https://image.tmdb.org/t/p/w500/${ m?.poster_path }`}`}  className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{ m?.original_title}</h5>
            <p className="card-text">{m?.release_date}</p>
            <button className="btn btn-primary" onClick={()=>handleRemoveMovie(m._id)}>Remove</button>
          </div>
        </div>
        )}
        </div>
        <div id="card-container">
        {shows.map((m:any)=>
        <div className="card" style={{width: "18rem"}} key={m?.id}>
          <img src={`${`https://image.tmdb.org/t/p/w500/${ m?.poster_path }`}`}  className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{ m?.original_title}</h5>
            <p className="card-text">{m?.release_date}</p>
            <button className="btn btn-primary" onClick={()=>handleRemoveShow(m._id)}>Remove</button>
          </div>
        </div>
        )}
        </div>
      </ol>
    </div>
  );
}

export default Account;