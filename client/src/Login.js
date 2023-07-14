import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import "./Login.css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input, Alert } from 'reactstrap';


function Login (args) {

    //**********
    const [modal, setModal] = useState(false);

    // const toggle = () => setModal(!modal); if any issues with login/signup, see if setFormData("") below had anything to do with it...

    const toggle = () => {
        setModal(!modal)
        setFormData({}) // reset formData with empty object
    };
    //**********

    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const {email, password} = formData;
    // const loginInfo = {email, password}



    const onLogin = (e) => {
        e.preventDefault()

        fetch("/login", { //"/auto_login"
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(user => {           //here is your fucking problem: localStorage.uid = user.id should be USER.UID you dunce.
            if (!user.errors) { 
                localStorage.uid = user.id
                args.setCurrentUser(user.id)
                history.push(`/myreviews`)
            } else {
                user.errors.forEach(e => alert(e))
                // user.json().then(errors => setErrors(errors.errors))
                setFormData("")
            }
        } )
    };



    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    };

    // const resetForm = () => {
    //     setFormData("")
    // }


    return (
    <div>
        <Button id="loginButton" color="success" onClick={toggle}>Log In</Button>

        <Modal id="modal" isOpen={modal} toggle={toggle} {...args}>

        <ModalHeader id="loginModalHeader" toggle={toggle}>
            Please enter your email and password below.
        </ModalHeader>

        <ModalBody>
            <Form onSubmit={onLogin} >
                <Row className="row-cols-lg-auto g-3 align-items-center">
                <Col>
                    <Label className="visually-hidden"for="exampleEmail">Email</Label>
                    <h6>Email:</h6>
                    <Input type='email' name='email' value={email} onChange={handleChange} required placeholder="email" />
                </Col>
                <Col>
                    {/* <Label className="visually-hidden"for="examplePassword">Password</Label> */}
                    <h6>Password:</h6>
                    <Input type='password' name='password' value={password} onChange={handleChange} required minLength="8" maxLength="16" placeholder="password"/>
                </Col>
                </Row>

                <ModalFooter>
                    <Button id="loginButtonModal" type='submit' >Log in!</Button>{' '}

                    <Button id="cancelButtonModal" onClick={toggle}>Cancel</Button>

                    {errors ? errors.map( e => 
                        console.log(e)) //(<Alert color="danger">{e}</Alert>)) 
                        : 
                        null}
                </ModalFooter>

            </Form>
        </ModalBody>



        </Modal>
    </div>

    )
};

// {errors ? errors.map( e => window.alert(e)) : null}
export default Login;
