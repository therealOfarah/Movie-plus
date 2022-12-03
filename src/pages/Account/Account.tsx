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
  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfileDetails(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [id])
  // console.log("*******",profile.movies)
  return (
    <div>
      {/* {profile.movies?.map((m:any)=>
        <div className="card" style={{width: "18rem"}} key={m.id}>
          <img src={`${`https://image.tmdb.org/t/p/w500/${ m?.poster_path }`}`}  className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{ m?.original_title}</h5>
            <p className="card-text">{m?.release_date}</p>
            <Link to={`/movie/${m?.id}`} state={m}><button className="btn btn-primary">Continue</button></Link>
          </div>
        </div>
        )} */}
    </div>
  );
}

export default Account;