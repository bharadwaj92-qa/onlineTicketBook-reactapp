import React, { useState, useEffect } from 'react'
import './styles.css';
import { useParams } from 'react-router-dom'
import { useGetAllMoviesQuery } from '../features/APISlice'

const url = "http://localhost:4000/movies"

export default function Home() {

    // const { data, error, isLoading } = useGetAllMoviesQuery()
    const [scrollPosition, setScrollPosition] = useState(0);
    const [mov, setmov] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setmov(data))
    }, []);

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
                            <li><a href="#">Latest Movies</a></li>
                            <li><a href="#">Upcoming Movies</a></li>
                            <li><a href="#">Nearby Events</a></li>
                        </ul>
                    </nav>
                </div>
                {mov &&
                    <div id='mov'>
                        {mov.map((mv) => (
                            <div>
                                {/* <p>{mv.name}</p> */}
                                <img src={mv.image_url} alt="" width="100%" height="100%" />

                            </div>

                        ))}
                    </div>
                }
                <div id="box1">
                    <p id='recomm'>Recommended movies</p>
                    <br></br>
                    {mov &&
                        <div id='mov'>
                            {mov.map((mv) => (
                                <div>
                                    {/* <p>{mv.name}</p> */}
                                    <img src={mv.image_url} alt="" width="100%" height="100%" />
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
