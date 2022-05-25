import React from 'react'
import AddMovie from './AddMovie'
import StarRating from './StarRating'

const FilterMovies = ({ searchRating, searchValue, handleSearch, handleRating, handleAdd }) => {
  return (
    <div className="header-container">
      <h1>Our movie app</h1>
    
      <div className="search-container">
        <input
          value={searchValue}
          onChange={handleSearch}
          className="inp"
          type="text"
          placeholder="Enter a movie to search"
        />
      </div>
      <StarRating rating={searchRating} handleRating={handleRating} />
      <AddMovie handleAdd={handleAdd} />
    </div>
  )
}

export default FilterMovies