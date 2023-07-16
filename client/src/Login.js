import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import "./Login.css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormText, Row, Col, Label, Input, Alert } from 'reactstrap';


function Login (args) {

    //**********
    const [modal, setModal] = useState(false);


    const toggle = () => {
        setModal(!modal)
        resetForm()        //to reset form data on modal close
    };

    // const toggleOnLogin = () => {    //not sure if necessary, working on error handling - onClick @ id=loginButtonModal
    //     setModal(!modal)
    // }

    //**********


    const [errors, setErrors] = useState([]);
    const history = useHistory();

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const resetForm = () => {
        setEmail("")
        setPassword("")
    };

    const handleLogin = (e) => {

        e.preventDefault()

        let loginInfo = {      //loginInfo object
            email: email,
            password: password,
        };

        setEmail("")     //reset of state
        setPassword("")  //reset of state

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
        .then(resp => resp.json())
        .then(user => {
            if (!user.errors) {
                localStorage.uid = user.uid
                args.setCurrentUser(user.id)
                console.log(`User # ${user.id} successfully logged in!`)
            } else setErrors(user.errors) //user.errors.forEach(error => (window.alert(error)))
        }); 
    };


    // console.log('login.js - current user :', args.currentUser);   //working


    return (
    <div>
        <Button id="loginButton" color="success" onClick={toggle}>Log In</Button>

        <Modal id="modal" isOpen={modal} toggle={toggle} {...args}>

        <ModalHeader id="loginModalHeader" toggle={toggle}>
            Please enter your email and password below.
        </ModalHeader>

        <ModalBody>
            <Form onSubmit={handleLogin} >

                <Row className="row-cols-lg-auto g-3 align-items-center">
                <Col>
                    <Label className='inputLabels' for="inputEmail">Email:</Label>
                    <Input id="inputEmail" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="name@example.com" />
                </Col>
                <Col>
                    <Label className='inputLabels' for="inputPassword">Password:</Label>
                    <Input id="inputPassword" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength="8" maxLength="16" placeholder="password"/>
                </Col>
                <Col>
						<FormText className='formText'>
                            BurgerBuddy™ will never share your email or password.
						</FormText>
					</Col>
                </Row>
                <br/>
                <ModalFooter>

                    <Button id="cancelButtonModal" onClick={toggle}>Cancel</Button>
                    <Button id="loginButtonModal" type='submit' >Log in!</Button>

                    {errors && errors.map((error, index) => (
                        <Alert key={index} color="danger">{error}</Alert>))}

                </ModalFooter>

            </Form>
        </ModalBody>



        </Modal>
    </div>

    )
};

// {errors ? errors.map( e => window.alert(e)) : null}
export default Login;
