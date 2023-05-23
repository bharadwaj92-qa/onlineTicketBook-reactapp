import React, { useState, useEffect } from 'react'
import './styles.css';
// import { useParams } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setDate, setTheatre, setTime, setSeats, setMovie, resetForm } from '../features/formSlice';

import { useGetMovieByIdQuery } from '../features/APISlice'

export default function Moviedetails() {

    const { id } = useParams()
    const dispatch = useDispatch();
    const { data, error, isLoading } = useGetMovieByIdQuery(id)

    const handleClick = (movie) => {
        dispatch(setMovie(movie));
    };

    return (
        <body>
            <div class="box-wrapper">
                <div id="box1">
                    <label class='logo'>Buy Entertainment</label>
                </div>
                <div id="box2">
                    <nav>
                        <ul className="navbar">
                            <Link to='/'>
                                <li><a href="#">Back to Main page</a></li>
                            </Link>

                        </ul>
                    </nav>
                </div>
                <div class='container'>
                    <br></br>
                    {data &&
                        <div>
                            <img src={data.image_url} alt="" width="100%" height="100%" />
                        </div>
                    }
                    {data &&
                        <div class='right-div'>
                            <p><b>Movie Name: </b>{data.moviename}</p>
                            <p><b>Release Date: </b>{data.release_date}</p>
                            <p><b>Duration: </b>{data.duration}</p>
                            <p><b>Rating: </b>{data.ratings}</p>
                            <br></br>
                        </div>

                    }

                </div>
                <div id='box1'>
                    {data &&
                        <div>
                            <Link to={`/movies/${data.id}/ticket-book`}>
                                <button id='book' onClick={handleClick(data.moviename)}>Book Now</button>
                            </Link>

                        </div>
                    }
                </div>

            </div>
        </body>
    )
}
