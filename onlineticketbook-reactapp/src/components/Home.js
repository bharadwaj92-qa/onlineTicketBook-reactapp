import React, { useState, useEffect } from 'react'
import './styles.css';
import { Link } from 'react-router-dom'
import { useGetAllMoviesQuery } from '../features/APISlice'

export default function Home() {

    const { data, error, isLoading } = useGetAllMoviesQuery()
    const [scrollPosition, setScrollPosition] = useState(0);


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
                            <Link to='/movies'>
                                <li><a href="#">Latest Movies</a></li>
                            </Link>

                            <li><a href="#">Upcoming Movies</a></li>

                            <Link to='/events'>
                                <li><a href="#">Nearby Events</a></li>
                            </Link>

                        </ul>
                    </nav>
                </div>
                {data &&
                    <div id='mov'>
                        {data.map((dt) => (
                            <div>
                                {/* <p>{mv.name}</p> */}
                                <img src={dt.image_url} alt="" width="100%" height="100%" />

                            </div>

                        ))}
                    </div>
                }
                <div id="box1">
                    <p id='recomm'>Recommended movies</p>
                    <br></br>
                    {data &&
                        <div id='mov'>
                            {data.map((dt) => (
                                <div>
                                    {/* <p>{mv.name}</p> */}
                                    <img src={dt.image_url} alt="" width="100%" height="100%" />
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
