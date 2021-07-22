import React, { useState, useEffect } from 'react'
import Axios from "axios";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ReservationList from './ReservationList'
import CustomerList from "./CustomerList";
import AddCustomerMaodal from './AddCustomerModal';
import AddReservationModal from './AddReservationModal';



const Main = () => {


    const [ customers, setCustomers] = useState([])
    const [ reservations, setReservations ] = useState([])

    const addCustomer = customer => {
		// customer.id = customers.length + 1
        Axios
        .post('http://localhost:8082/api/customer', customer)
        .then(response => {
            console.log(response)
            fetchCustomers()
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    const addReservation = reservation => {
        console.log(reservation)
        Axios
        .post('http://localhost:8082/api/customer/addReservation', reservation)
        .then(response => {
            console.log(response)
            fetchReservations()
        })
        .catch(error => {
            console.log(error)
        })
	}

	const deleteCustomer = customer => {
        console.log(customer)
        Axios
        .delete('http://localhost:8082/api/customer-delete&customerid='+customer.id)
        .then(response => {
            console.log(response)
            fetchCustomers()
            fetchReservations() 

        })
        .catch(error => {
            console.log(error)
        })
    }


	const deleteReservation = reservation => {
        console.log(reservation)
        Axios
        .delete('http://localhost:8082/api/reservation-delete&reservationId='+reservation.id)
        .then(response => {
            console.log(response)
            fetchCustomerReservations(reservation.customerId)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    const editCustomer = customer => {
        Axios
        .put('http://localhost:8082/api/customer', customer)
        .then(response => {
            console.log(response)
            fetchCustomers()
        })
        .catch(error => {
            console.log(error)
        })
    }


    const editReservation = reservation => {
        Axios
        .put('http://localhost:8082/api/customer/reservation', reservation)
        .then(response => {
            console.log(response)
            fetchCustomerReservations(reservation.customerId)
        })
        .catch(error => {
            console.log(error)
        })
    }


    const fetchCustomerReservations = async (customerId) => {
        const { data } = await Axios.get(
            "http://localhost:8082/api/customer&customerId="+customerId+"/reservation"
          );
          const reservations = data;
          setReservations(reservations);
          console.log(reservations);
    }



    const fetchCustomers = async () => {
        const { data } = await Axios.get(
          "http://localhost:8082/api/customer"
        );
        const customers = data;
        setCustomers(customers);
        console.log(customers);
      };
    
      useEffect(() => {
          fetchCustomers();
      }, []);


      const fetchReservations = async () => {
        const { data } = await Axios.get(
          "http://localhost:8082/api/reservations"
        );
        const reservations = data;
        setReservations(reservations);
        console.log(reservations);
      };
    
      useEffect(() => {
          fetchReservations();
      }, []);
  

    
    return (
        <Container>
            <Row>
                <Col xs>
                    <CustomerList 
                        customers={customers}
                        editCustomer={editCustomer}
                        deleteCustomer={deleteCustomer}
                        fetchCustomerReservations={fetchCustomerReservations}
                        addReservation={addReservation}
                    />
                    <AddCustomerMaodal
                        addCustomer={addCustomer}
                    />
                </Col >
                <Col xs>
                    <ReservationList
                        reservations={reservations}
                        editReservation={editReservation}
                        deleteReservation={deleteReservation}
                    />
                </Col>
            </Row>
        </Container>
    )

}

export default Main