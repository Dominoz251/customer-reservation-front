import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



const AddCustomerMaodal = props => {

    const [show, setShow] = useState(false);
    const initialFormState = { 
        id: null, 
        name: '', 
        surname: '', 
        login: '', 
        email: ''
    }
    const [ customer, setCustomer ] = useState(initialFormState)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(customer)
        props.addCustomer(customer)
        setCustomer(initialFormState)
        handleClose()
    }

    const handleInputChange = event => {
		const { name, value } = event.target
		setCustomer({ ...customer, [name]: value })
	}

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add Customer
            </Button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Adding customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <form onSubmit = {handleSubmit}>
                        <div>
                            <label>Name: </label>
                            <br/>
                            <input 
                                type='text'
                                name='name'
                                value={customer.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Place your name"
                            />
                        </div>
                        <div>
                            <label>Surname: </label>
                            <br/>
                            <input 
                                type='text'
                                name='surname'
                                value={customer.surname}
                                onChange={handleInputChange}
                                required
                                placeholder="Place your surname"
                            />
                        </div>
                        <div>
                            <label>Login: </label>
                            <br/>
                            <input 
                                type='text'
                                name='login'
                                value={customer.login}
                                onChange={handleInputChange}
                                required
                                placeholder="Place your login"
                            />
                        </div>
                        <div>
                            <label>Email: </label>
                            <br/>
                            <input 
                                type='email'
                                name='email'
                                value={customer.email}
                                onChange={handleInputChange}
                                required
                                placeholder="Place your email"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary " >
                        Add
                        </button>
                    </form>
                </div>
            </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddCustomerMaodal