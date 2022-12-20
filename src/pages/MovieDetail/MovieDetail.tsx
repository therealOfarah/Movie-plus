import React, { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { movieRecommendationsApi,getTrailer} from '../../api';
import '../../styles/detail.css'
type Props ={
  handleSaveMovie: (data: any) => void
  user:any
}
function MovieDetail(props:Props) {
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
  const [preview,setPreview] = useState<any>([])
  const location  = useLocation()
  const data = location.state
  useEffect(() => {
    movieRecommendationsApi(data.id).then((q)=>setRecs((q)))
    getTrailer(data.id).then(q=> setPreview(q))
  }, [data.id])
  let trailer: any[]= []
  for (let i = 0; i <preview?.length; i++) {
    if(preview[i].name === 'Official Trailer'){
      trailer.push(preview[i])
    }
  }
  const m = (trailer[0])
  return (
    <>
    <div >
    <div className='sage' style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/w500/${data.poster_path}`})`,backgroundSize: 'cover', overflow: 'hidden'}}>
      <img id="image" style={{}}src={`${`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}`}  className="card-img-top" alt="..."/>
      </div>
      <h3 style={{textAlign:'center', color:'red'}}>{data.original_title}</h3>
      <p style={{textAlign:'center', color:'black',fontSize:'30px'}}>{data.overview}
      </p>
      {props.user?.profile === undefined ?
      <>
      <h3 style={{textAlign:"center", marginTop:"5vh"}}>Trailer</h3>
      <iframe
      id="trailer"
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${m?.key}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      />
      </>
      :
      
      <>
      <h3 style={{textAlign:"center", marginTop:"5vh"}}>Trailer</h3>
      <iframe
      id="trailer"
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${m?.key}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
      <button style={{display:"flex",justifyContent:"center", margin:"auto",marginTop:"5vh"}} className="btn btn-outline-primary" onClick={()=>props.handleSaveMovie(data)}>Save Me</button>
      </>
      }
    </div>
    {recs?.length === 0 || undefined ? '':
    <>
    <h2 style={{textAlign:"center", marginTop:"5vh"}}>You might also like</h2>
    <div id="card-container">
      {recs?.map((m:any)=>
        <>
        <div className="card" style={{width: "18rem"}} key={m.id} >
          <img src={`${`https://image.tmdb.org/t/p/w440_and_h660_face/${m.backdrop_path === (undefined || null) ? m.poster_path : m.backdrop_path}`}`}  className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{ m.original_name === undefined ? m.title:m.name}</h5>
            <p className="card-text">{m.release_date === undefined ? m.first_air_date:m.release_date}</p>
            <Link to={`/movie/${m.id}`} state={m}><button className="btn btn-primary">Continue</button></Link>
          </div>
        </div>
        </>
        )}
    </div>
    </>
    }
    </>

  );
}

export default MovieDetail;