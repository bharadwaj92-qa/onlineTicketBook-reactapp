import React, { useState, useEffect } from 'react'
import './styles.css';
import { Link } from 'react-router-dom'

import { useGetAllMoviesQuery } from '../features/APISlice'

export default function Movies() {

    const { data, error, isLoading } = useGetAllMoviesQuery()

    return (
        <body>
            <div class="box-wrapper">
                <div id="box1">
                    <label class='logo'>Buy Entertainment</label>
                    <input class='search' placeholder='Search'></input>
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

                <div id="box1">
                    <p id='recomm'>Latest Movies</p>
                    <br></br>
                    {data &&
                        <div id='mov'>
                            {data.map((dt) => (
                                <div>
                                    <Link to={`${dt.id}`}>
                                        <img src={dt.image_url} alt="" width="100%" height="100%" />
                                    </Link>
                                    <button id='book'>Book</button>
                                </div>

                            ))}
                        </div>
                    }
                    <br></br>
                </div>

            </div>
        </body>
    )
}
