import React, { useState } from 'react';
import { searchApi } from '../../api';
function Search() {
  const [formData, setFormData] = useState({query: ''})

  const handleChange = (evt: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData,[evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault()
    // props.handleWorkoutSearch(formData)
    searchApi(formData.query)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="query" 
          type="text"  
          autoComplete="off"
          value={formData.query}
          onChange={handleChange}
          className="form-control"
          placeholder="Pick a Body Part to Work"
        />
        <button className="btn btn-light"type="submit">Search</button>
      </form>
    </>
  );
}

export default Search;