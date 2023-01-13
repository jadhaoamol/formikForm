import React, { useState } from 'react'

function ManualValidation() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    //const emailRegex = ^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^-]+(?:\\.[a-zA-Z0-9_!#$%&'*+/=?`{|}~^-]+)*@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const HandleName = (e) => {
        let name = e.target.value;
        console.log(name)
        if (!name.lenght < 3) {
            setNameError(true);
        }
        else {
            setNameError(false);
        }
        setName(name)

    }
    const handleEmail = (e) => {
        let email = e.target.value;
        console.log(email);
        if (!email.match(emailRegex)) {
            setEmailError(true)
        }
        else {
            setEmailError(false)
        }
        setEmail(email)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0]);
        console.log(e.target[1]);
        }
    return (
        <div>
            <h2>ManualValidation</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter Name : &nbsp;</label>
                <input type="text" name="name" value={name} onChange={HandleName} />
                <br />
                {nameError ? <span style={{ color: 'red' }}>Name lenght must be grater than 2 char</span> : ''}
                <br /><br />
                <label htmlFor="">Enter Email : &nbsp;</label>
                <input type="text" name="email" value={email} onChange={handleEmail} />
                <br />
                {emailError ? <span style={{ color: 'red' }}>Email in valid </span> : ''}
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ManualValidation
