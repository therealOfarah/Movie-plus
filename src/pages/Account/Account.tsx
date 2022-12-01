import React from 'react';
import { useEffect,useState } from 'react';
import * as profileService from '../../services/profileService'
type Props={
  savedMovie:any;
  user:any;
}
function Account(props:Props) {
  const id = props.user.profile
  const[profile,setProfile] = useState({})
  const[movie,setMovie] = useState([])
  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfileDetails(id)
      setProfile(profileData)
      console.log(profileData)
      // setMovie(props.savedMovie)
    }
    fetchProfile()
  }, [id])
  return (
    <div>
      
    </div>
  );
}

export default Account;