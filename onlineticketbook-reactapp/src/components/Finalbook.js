import React, { useState, useEffect } from 'react'
import './styles.css';
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setDate, setTheatre, setTime, setSeats, resetForm, setMovie } from '../features/formSlice';
import QRCode from 'qrcode.react';

export default function Finalbook() {

    const qrCodeText = 'Buy Entertainment by Bharadwaj N';
    const ticket = useSelector(state => state.form.seats);
    const movie = useSelector(state => state.form.movie)
    const date = useSelector(state => state.form.date)


    const QRCodeGenerator = ({ text }) => {

        return (
            <div>
                <QRCode value={text} />
            </div>
        );
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
                    <div class="qr">
                        <QRCodeGenerator text={qrCodeText} />
                    </div>
                    <div class='right-div'>
                        <p><b>Movie name: </b>{movie}</p>
                        <p><b>Date: </b>{date}</p>
                        <p><b>Seat No: </b> A-{ticket}</p>
                    </div>
                </div>

            </div>
        </body>
    )
}
