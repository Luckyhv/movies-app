import React from 'react'
import "./Movie.css"
import movie from './movie.jpg';

export default function Movie({ addfavoritemovie, poster_path, original_title, overview, vote_average }) {
    const img_api = "https://image.tmdb.org/t/p/w500"
    return (
        <>
            <div className="card-container">
                <div className="card con" >
                    <img src={poster_path ? img_api + poster_path : movie} className="card-img-top" alt="" />                    
                    <div className="card-body">
                        <h5 className="card-title title">{original_title.slice(0, 30)}</h5>
                        <p className="card-text" style={{ marginTop: "8px" }}>{overview ? overview.slice(0, 70) : "No description to show.Stay tuned for more information See you Later"}....</p>
                        {/* <a href='/' className="btn btn-primary" onClick={addfavoritemovie}>Add to Favorites</a> */}
                        <span className="badge rounded-pill bg-primary">Rating - {vote_average}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
// {img_api+props.movie.poster_path}
// {props.movie.overview.slice(0,80)}