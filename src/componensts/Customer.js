import React from "react";
import { Card, Button } from "react-bootstrap";

function Customer({ id, name, surname, login, email }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{login}</td>
            <td>{email}</td>
            <td>
            </td>
        </tr>
    )
}

export default Customer;