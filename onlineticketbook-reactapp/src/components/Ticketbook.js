import React, { useState, useEffect } from 'react'
import './styles.css';
// import { useParams } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useGetMovieByIdQuery } from '../features/APISlice'
import Checkbox from './Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { setDate, setTheatre, setTime, setSeats, resetForm } from '../features/formSlice';

export default function Ticketbook() {

    const { id } = useParams()
    const dispatch = useDispatch();
    const { data, error, isLoading } = useGetMovieByIdQuery(id)

    const [selectedDate, setSelectedDate] = useState(null);
    const [show, setShow] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const datee = date.toLocaleDateString();
        dispatch(setDate(datee));
    };

    const handleClick = () => {
        setShow(true);
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
                <div id='box1'>
                    <DatePicker selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat='MM/dd/yyyy'
                        minDate={new Date()}
                        placeholderText='    choose the date  '
                    ></DatePicker>
                    <p><b>Selected date: </b>{selectedDate ? selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }) : ''}</p>
                    <div>
                        <h3>Available Show Timings:</h3>
                        {selectedDate &&
                            <div>
                                <h1 class='movinticketbook'>{data.moviename}</h1>
                                <br></br>
                                <br></br>
                                <div class='theatrlst'>
                                    <ul>
                                        {data.theatres.map((parentItem, index) => (
                                            <li key={index}>
                                                {parentItem}
                                                <ul class='show'>
                                                    {data.show_timings.map((childItem, index) => (
                                                        <li onClick={handleClick}>{childItem}</li>

                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>

                                </div>

                            </div>
                        }
                    </div>
                    <div>

                    </div>
                </div>
                <div id='box1'>
                    {show &&
                        <div>
                            <Checkbox />
                            <Link to={`/movies/${data.id}/final-book`}>
                                <button id='book'>Book</button>
                            </Link>
                        </div>
                    }

                </div>

            </div>
        </body >
    )
}
