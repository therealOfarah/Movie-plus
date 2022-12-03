import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import * as profileService from '../../services/profileService'
type Props={
  savedMovie:any;
  user:any;
}

function Account(props:Props) {
  const id = props.user.profile
  const[profile,setProfile] = useState<any>()
  const[movie,setMovie] = useState<any>([])
  const[shows,setShows] = useState<any>([])
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
  console.log("*******",profile)
  return (
    <div>
      <h3>{profile?.name}</h3>
      <ol>
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
      </ol>
    </div>
  );
}

export default Account;