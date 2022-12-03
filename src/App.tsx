import React, { useEffect, useState } from 'react';
import { Routes, Route,useNavigate } from 'react-router-dom'
import getApi from './api';
import NavBarTop from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import Movie from './pages/Movie/Movie';
import Show from './pages/Show/Show';
import ShowDetail from './pages/ShowDetail/ShowDetail';
import * as authService from './services/authServices'
import * as movieService from './services/moviesServices'
import * as showService from './services/showsServices'
import Login from './Login/Login';
import Signup from './pages/SignUp/Signup';
import Account from './pages/Account/Account';

function App() {
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
  type D ={
    original_title:string;
    overview:string;
    poster_path:string;
    release_date:string;
    
  }
  const [user, setUser] = useState(authService.getUser());
  const [movies,setMovies] =useState<T>()
  const [savedMovie,setSavedMovie] = useState<D|any>([{}])  
  const [savedShow,setSavedShow] = useState<D|any>([{}])

  useEffect(()=>{
    getApi().then((q)=>setMovies(q.results))
  },[])
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log("logged out");
    authService.logout();
    setUser(null);
    navigate("/");
  };
  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };
  const handleSaveMovie = async (data:any)=>{
    const save = await movieService.saveMovie(data)
    console.log(save,"*****")
    setSavedMovie([save])
  }
  const handleSaveShow = async (data:any)=>{
    const save = await showService.saveShow(data)
    console.log(save,"*****")
    setSavedShow([save])
  }
  return (
    <>
    <NavBarTop user={user} handleLogout={handleLogout} />
    <Routes>
      <Route path="/login"element={<Login handleSignupOrLogin={handleSignupOrLogin} />}></Route>
      <Route path="/signup"element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}></Route>
      <Route path='/'element={<Home state={movies}/>} />      
      <Route  path='/account'element={<Account user={user} savedMovie={savedMovie} />} />
      <Route path='/movie'element={<Movie/>} />
      <Route path='/movie/:id'element={<MovieDetail user={user} handleSaveMovie={handleSaveMovie} />} />      
      <Route path='/show'element={<Show />} />
      <Route path='/show/:id'element={<ShowDetail user={user} handleSaveShow={handleSaveShow}/>} />
    </Routes>
    </>
  );
}

export default App;
