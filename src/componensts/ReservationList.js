import React, { useState, useEffect } from "react";
import Axios from "axios";
import Table from 'react-bootstrap/Table'
import EditReservationModal from "./EditReservationModal";


const ReservationList = props => {

    return (
        <div>
            <h1>
                Reservation list
            </h1>
            <Table striped bordered hover size="sm">
            <thead>
                    <tr>
                    <th>id</th>
                    <th>Date</th>
                    <th>Customer Login</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {props.reservations.map((reservation) => (
                    <tr key={reservation.id}>
                        <td>{reservation.id}</td>
                        <td>{reservation.date}</td>
                        <td>{reservation.customerLogin}</td>
                        <td>
                            <EditReservationModal
                                editReservation={props.editReservation}
                                reservation={reservation}
                            />
                        </td>
                        <td>
                            <button className="btn btn-danger btn-sm" onClick={() => props.deleteReservation(reservation)}>X</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
        
    );
  }
  
  export default ReservationList;