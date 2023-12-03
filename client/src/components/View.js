import React, { useEffect, useState } from "react";

function View() {
    const [name, setName] = useState('');
    const [lname, setLastName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const storedName = localStorage.getItem('Name');
        const storedLastName = localStorage.getItem('Last Name');
        const storedEmail = localStorage.getItem('Email');

        if (storedName && storedLastName && storedEmail) {
            setName(storedName);
            setLastName(storedLastName);
            setEmail(storedEmail);
        }
    }, []);

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h2>Employee Details</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <p><strong>First Name:</strong> {name}</p>
                            <p><strong>Last Name:</strong> {lname}</p>
                            <p><strong>Email:</strong> {email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default View;
