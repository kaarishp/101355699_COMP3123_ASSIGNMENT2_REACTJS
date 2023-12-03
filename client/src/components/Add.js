import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import {v4 as uuid} from "uuid";
import { Link, useNavigate } from 'react-router-dom';

function Add() {
    
    const[name, setName] = useState('');
    const[lname, setLastName] = useState('');
    const[email, setEmail] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = name,
        b = lname,
        c = email;

        Employees.push({id: uniqueId, Name: a, LName : b, Email : c})

        history("/")
    }


    return <div>
         <div style={{ background: "#f0f0f0", padding: "15px", marginBottom: "20px" }}>
                <h2 style={{ textAlign: "center", margin: "0" }}>Add Employee</h2>
            </div>
        <Form className="d-grid gap-2" style={{margin: "15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Control type="text" placeholder="Enter Last Name" required onChange={(e) => setLastName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="text" placeholder="Enter Email" required onChange={(e) => setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>
}

export default Add;