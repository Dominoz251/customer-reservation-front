import React from "react";
import Table from 'react-bootstrap/Table'
import EditCustomerModal from "./EditCustomerModal";
import AddReservationModal from "./AddReservationModal";


const CustomerList = props => {
  
    return (
        <div>
            <h1>
                Customers list
            </h1>
            <Table striped bordered hover size="sm">
            <thead>
                    <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Login</th>
                    <th>E-mail</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Reservations</th>
                    <th>Add Reservation</th>
                    </tr>
                </thead>
                <tbody>
                {props.customers.map((customer) => (
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.surname}</td>
                        <td>{customer.login}</td>
                        <td>{customer.email}</td>
                        <td>
                            <EditCustomerModal
                                editCustomer={props.editCustomer}
                                customer={customer}
                            />
                        </td>
                        <td>
                            <button className="btn btn-danger btn-sm" onClick={() => props.deleteCustomer(customer)}>X</button>
                        </td>
                        <td>
                            <button className="btn btn-info btn-sm" onClick={() => props.fetchCustomerReservations(customer.id)}>=></button>
                        </td>
                        <td>
                            <AddReservationModal 
                                addReservation={props.addReservation}
                                customer={customer} 
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
        
    );
  }
  
  export default CustomerList;