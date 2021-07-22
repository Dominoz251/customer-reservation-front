import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DatePicker from "react-datepicker";
import Axios from "axios";
import "react-datepicker/dist/react-datepicker.css";





const AddReservationModal = props => {

    const [show, setShow] = useState(false);
    const [bussyDates, setBussyDates] = useState([]);
    const { register, handleSubmit } = useForm()
    const [startDate, setStartDate] = useState(new Date());
    const initialFormState = { 
        date: null, 
        cutomerId: props.customer.id
    }
    const [ reservation, setReservation ] = useState(initialFormState)



    const onSubmit = () => {
        console.log(startDate)
        props.addReservation(reservation)
    }


    const fetchBussyDates = async () => {
        const { data } = await Axios.get(
          "http://localhost:8082/api/bussy-dates"
        );
        const bussyDates = data;
        bussyDates.map((date)=> {
            date=new Date(date)
        })
        setBussyDates(bussyDates)

        console.log(bussyDates);

      };
    
      useEffect(() => {
        fetchBussyDates();
      }, []);


    const handleClose = () => setShow(false);
    const handleShow = () => {
        fetchBussyDates()
        setShow(true)
    };



    return (
        <div>

            <Button variant="primary" onClick={handleShow}>
                Add
            </Button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Adding reservation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                        setStartDate(date)
                        setReservation({...reservation, date:date.toDateString()})}
                    }
                    excludeDates={[bussyDates]}
                    minDate={new Date()}
                    placeholderText="Select a date other than today or yesterday"
                />
                
                <div>
                <button type="submit" onClick={handleClose} className="btn btn-primary ">
                        Add reservation
                </button>
                </div>
                </form>
            </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddReservationModal