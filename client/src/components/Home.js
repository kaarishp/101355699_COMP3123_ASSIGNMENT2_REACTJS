import React, { Fragment } from "react";
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate} from 'react-router-dom'


function Home(){

    let history = useNavigate();
    
    const handleEdit = (id, name, lname, email) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Last Name', lname);
        localStorage.setItem('Email', email);
        localStorage.setItem('ID', id);
    }

    const hadnleDelete = (id) => {
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        Employees.splice(index, 1);

        history('/');

    }

    const handleView = (id, name, lname, email) => {
        console.log("View button clicked:", id, name, lname, email);
        localStorage.setItem('Name', name);
        localStorage.setItem('Last Name', lname);
        localStorage.setItem('Email', email);
        localStorage.setItem('ID', id);
        history(`/view/${id}`);
    }
    

    return(
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <div style={{ background: "#f0f0f0", padding: "15px", marginBottom: "20px" }}>
                    <h2 style={{ textAlign: "center", margin: "0" }}>Employee Management</h2>
                </div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                            ?
                            Employees.map((item) => {
                                return(
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.LName}
                                        </td>
                                        <td>
                                            {item.Email}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button onClick={() => handleEdit(item.id, item.Name, item.LName, item.Email)}>Update</Button>
                                            </Link>
                                            &nbsp;
                                            <Button variant="danger" onClick={() => hadnleDelete(item.id)}>Delete</Button>
                                            &nbsp;
                                            <Button variant="success" onClick={() => handleView(item.id, item.Name, item.LName, item.Email)}>View</Button>
                                            
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No Data Available"
                        }
                    </tbody>

                </Table>
                <br>
                </br>
                <Link className='d-grid gap-2' to="/create">
                    <Button size="lg">Add Employee</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;