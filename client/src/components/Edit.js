import React, { useState, useEffect } from 'react';
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import {v4 as uuid} from "uuid";
import { Link, useNavigate } from 'react-router-dom';

function Edit(){

    const[name, setName] = useState('');
    const[lname, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[id, setId] = useState('');

    let history = useNavigate();

    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Employees[index];
        a.Name = name;
        a.LName = lname;
        a.Email = email;

        history("/")
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setLastName(localStorage.getItem('Last Name'))
        setEmail(localStorage.getItem('Email'))
        setId(localStorage.getItem('ID'))
    }, [])

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin: "15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Control type="text" placeholder="Enter Last Name" value={lname} required onChange={(e) => setLastName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="text" placeholder="Enter Email" value={email} required onChange={(e) => setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
        </Form>
        </div>
    )

}

export default Edit;