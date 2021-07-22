import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Axios from "axios";
import CustomerList from "./CustomerList";



function AddCustomer() {

    const [customers, setCustomers] = useState([]);
  
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



    const [show, setShow] = useState(false);

    const { register, handleSubmit } = useForm()


    const onSubmit = (data, e) => {
        
        e.target.reset()
        Axios
        .post('http://localhost:8082/api/customer', data)
        .then(response => {
            console.log(response.data)
            fetchCustomers()
        })
        .catch(error => {
            console.log(error)
        })

    }
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (

        <div>
            <CustomerList customers={customers}/>
            <Button variant="primary" onClick={handleShow}>
                Add Customer
            </Button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Adding customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <form onSubmit = {handleSubmit(onSubmit)}>
                        <div>
                            <label>Name: </label>
                            <br/>
                            <input 
                                {...register("name")} 
                                placeholder="Place your name"
                            />
                        </div>
                        <div>
                            <label>Surname: </label>
                            <br/>
                            <input 
                                {...register("surname")} 
                                placeholder="Place your surname"
                            />
                        </div>
                        <div>
                            <label>Login: </label>
                            <br/>
                            <input 
                                {...register("login")} 
                                placeholder="Place your login"
                            />
                        </div>
                        <div>
                            <label>Email: </label>
                            <br/>
                            <input 
                                {...register("email")} 
                                placeholder="Place your email"
                            />
                        </div>
                        <button type="submit">
                        Add
                        </button>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
            </Modal>
        </div>
    );
  }
  
export default AddCustomer