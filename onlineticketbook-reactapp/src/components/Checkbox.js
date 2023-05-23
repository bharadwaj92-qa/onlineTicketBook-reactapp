import React, { useState, useEffect } from 'react'
import './styles.css';
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setDate, setTheatre, setTime, setSeats, resetForm } from '../features/formSlice';

export default function Checkbox() {

    const dispatch = useDispatch();

    const [checkboxes, setCheckboxes] = useState(new Array(100).fill(false));

    const handleCheckboxChange = (index) => {
        setCheckboxes((prevCheckboxes) => {
            const updatedCheckboxes = [...prevCheckboxes];
            updatedCheckboxes[index] = !updatedCheckboxes[index];
            return updatedCheckboxes;
        });
        dispatch(setSeats(index));
    };

    const renderCheckboxGrid = () => {
        return checkboxes.map((checked, index) => (
            <div key={index} style={{ display: 'inline-block', width: '10%', margin: '5px' }}>
                <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    checked={checked}
                    onChange={() => handleCheckboxChange(index)}
                />
                <label>A{index}</label>
            </div>
        ));
    };

    return (
        <div>
            <h3>Select the seats</h3>
            <br></br>
            {renderCheckboxGrid()}
        </div>
    )
}
