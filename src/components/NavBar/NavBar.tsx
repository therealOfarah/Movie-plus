import React,{useState} from "react";
import logo1 from "../../images/logo1.jpg";
import { searchApi} from "../../api";
import {  useNavigate, Link } from "react-router-dom";
function NavBar() {
  const [data,setData] = useState()
  const [formData, setFormData] = useState({query: ''})

  const handleChange = (evt: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData,[evt.target.name]: evt.target.value})
  }
  const navigate = useNavigate()
  const handleSubmit = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault()
    searchApi(formData.query).then((q)=>setData(q))
    navigate('/movie',{
      state:{data}})
    // console.log(data)
  }
  return (
    <nav className="navbar navbar-expand-lg " >
      <div className="container-fluid">
      <Link className="navbar-brand"  to='/'>
          <img
            src={logo1}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Movie+
      </Link>
        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movie">Movies</Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="query" 
              autoComplete="off"
              value={formData.query}
              onChange={handleChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
