import React, { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { showRecommendationsApi} from '../../api';
import '../../styles/detail.css'
type Props ={
  handleSaveShow: (data: any) => void
  user:any
}
function ShowDetail(  props:Props ) {
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
  const [recs,setRecs]=useState<T | any>()
  const location  = useLocation()
  const data = location.state
  useEffect(() => {
    showRecommendationsApi(data.id).then((q)=>setRecs((q)))
  }, [data.id])
  return (
    <>
    <div >
      <div className='sage' style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/w500/${data.poster_path}`})`,backgroundSize: 'cover', overflow: 'hidden'}}>
        {/* <h3></h3> */}
      <img id="image" style={{}}src={`${`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}`}  className="card-img-top" alt="..."/>
      </div>
      <h3 style={{textAlign:'center', color:'red'}}>{data.original_title}</h3>
      <p style={{textAlign:'center', color:'black',fontSize:'30px'}}>{data.overview}
      </p>
      {props.user?.profile === undefined ?
      ''
      :
      <button onClick={()=>props.handleSaveShow(data)}>Save Me</button>
      
    }
      {recs?.length === 0 || undefined ? '':
    <>
    <h2 style={{textAlign:"center", marginTop:"5vh"}}>You might also like</h2>
    <div id="card-container">
      {recs?.map((m:any)=>
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
    </>
    }
    </div>
    </>

  );
}

export default ShowDetail;