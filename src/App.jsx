import './App.css';
import { useState } from 'react';
import MovieList from './Components/MovieList';
import FilterMovies from './Components/FilterMovies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './Components/Details';
function App() {
  const data=[
    {id:Math.random(),
      title:"Iron Man",
     posterURL:'https://fr.web.img3.acsta.net/medias/nmedia/18/62/89/45/18876909.jpg',
     rating:5,
     date:"December 2014",
     description:"",
     trailer:"https://www.youtube.com/embed/8ugaeA-nMTc"
    },
    {id:Math.random(),
    title:"Iron Man 3",
    posterURL:'https://i-mom.unimedias.fr/2020/09/16/iron-man-3.jpg?auto=format,compress&cs=tinysrgb',
    rating:3,
    date:"Janvier 2020",
    description:"",
     trailer:"https://www.youtube.com/embed/Ke1Y3P9D0Bc"
   },
   {id:Math.random(),
    title:"Iron Man 2",
    posterURL:"https://www.ubuy.tn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFhUUVTUjBnaUwuX1NMMTUwMF8uanBn.jpg",
    rating:1,
    date:"Mars 2016",
    description:"",
     trailer: "https://www.youtube.com/embed/wKtcmiifycU"
   } 
  ]
  const [moviesList, setMovies] = useState(data)
  const [searchRating, setSearchRating] = useState(1);
  const [searchValue, setSearchValue] = useState("");
    // handle rating
    const handleRating = (newRate) => setSearchRating(newRate);
    //adding movies to the list
  const handleAdd = (newMovie) => setMovies([...moviesList, newMovie]);
   // handle search
   const handleSearch = (e) => setSearchValue(e.target.value);

  return (
    <div>
      
      <FilterMovies
       searchRating={searchRating}
       searchValue={searchValue}
       handleRating={handleRating}
       handleSearch={handleSearch}
       handleAdd={handleAdd}
       />
       <BrowserRouter>
       <Routes>
         <Route path='/' element={<MovieList movies={moviesList.filter(
          (movie) =>
            movie.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase().trim()) &&
            movie.rating >= searchRating
        )}/>}/>
         <Route path="/Details/:id" element={<Details movies={moviesList} />} />
       </Routes>
       </BrowserRouter>


      
    </div>
  );
}

export default App;
