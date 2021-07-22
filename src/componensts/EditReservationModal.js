import React, { useState, useEffect, useRef } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const EditReservationModal = props => {

    const [show, setShow] = useState(false);
    const [bussyDates, setBussyDates] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const initialFormState = { 
        id: null, 
        date: null 
    }

    const [ reservation, setReservation ] = useState(props.reservation)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(reservation)
        props.editReservation(reservation)
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button className="btn btn-primary btn-sm" onClick={handleShow}>></button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Editing reservation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit = {handleSubmit}>
            <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                        setStartDate(date)
                        setReservation({...reservation, date:date.toDateString()})}
                    }
                    excludeDates={bussyDates}
                    placeholderText="Select a date other than today or yesterday"
                />
                <div>

                        <button type="submit" onClick={handleClose} className="btn btn-primary ">
                            Save Changes
                        </button>
                    
                </div>
                </form>
            </Modal.Body>
            </Modal>
        </div>
    )
}

export default EditReservationModal