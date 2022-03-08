import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import "./Home.css"
import Navbar from './Navbar';
import Conpagination from './Conpagination';
// import axios from "axios"

export default function Home() {
  const [page,setpage]=useState(1);
  const [movies, setMovies] = useState([]);
  // const [favorites, setFavorites] = useState([]);
  // const [numOfPages, setNumOfPages] = useState();

  
  useEffect(() => {
    window.scroll(0,0);
    const fetchPopular = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=6bea443a9556b09e135dc3e19d0ffbbc&language=en-US&page=${page}`
      const data = await fetch(url);
      const parsedData = await data.json();
      // const {data}=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6bea443a9556b09e135dc3e19d0ffbbc&language=en-US&page=${page}`);
      setMovies(parsedData.results);
    };
    fetchPopular(page);
  },[page]);

  const searchapi = "https://api.themoviedb.org/3/search/movie?api_key=6bea443a9556b09e135dc3e19d0ffbbc&query="
  const [search, searchItems] = useState("Avengers")
  const changefun = (event) => {
    searchItems(event.target.value);
  };

  const searchfun = async (event) => {
    event.preventDefault();
    const data = await fetch(searchapi + search);
    const parsedData = await data.json();
    setMovies(parsedData.results);
  }

  // const addfavoritemovie=(movie)=>{
  //   const newfavlist=[...favorites,movie];
  //   setFavorites(newfavlist)
  // }
  return (
    <>
      <Navbar changedfun={changefun} searchedfun={searchfun}/>
      <h1>Popular Movies</h1>
      <div className='cont'>
        {movies.length > 0 && movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
      <Conpagination setpage={setpage} />
    </>
  )
}
