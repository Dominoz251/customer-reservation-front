import React, { useState, useEffect, useRef } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



const EditCustomerModal = props => {

    const [show, setShow] = useState(false);
    const initialFormState = { 
        id: null, 
        name: '', 
        surname: '', 
        login: '', 
        email: ''
    }
    const [ customer, setCustomer ] = useState(props.customer)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(customer)
        props.editCustomer(customer)
        setCustomer(initialFormState)
    }

    const handleInputChange = event => {
		const { name, value } = event.target
		setCustomer({ ...customer, [name]: value })
	}

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button className="btn btn-primary btn-sm" onClick={handleShow}>></button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Editing customer</Modal.Title>
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
                        <button type="submit" onClick={handleClose} className="btn btn-primary " >
                        Save changes
                        </button>
                    </form>
                </div>
            </Modal.Body>
            </Modal>
        </div>
    )
}

export default EditCustomerModal