import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input } from 'reactstrap'; //FormGroup?
import "./Signup.css"



// 07/01 need to add password confirmation input field, etc. 
//		and note case sensitivity, length




function Signup (args) {


	//**********
	const [modal, setModal] = useState(false)
	// const toggle = () => setModal(!modal);  if any issues with login/signup, see if setFormData("") below had anything to do with it...

	const toggle = () => {
        setModal(!modal)
        setFormData("")
    };
	//**********

	// const [firstName, setFirstName] = useState("")
	// const [lastName, setLastName] = useState("")
	// const [email, setEmail] = useState("")
	// const [password, setPassword] = useState("")

	// const [login, setLogin] = useState("")
	const [errors, setErrors] = useState("")
	const history = useHistory()

	

	const [formData, setFormData] = useState({
        first_name:'',
		last_name: '',
        email:'',
        password:'',
		password_confirmation: ''
    })

	

	const {first_name, last_name, email, password, password_confirmation} = formData //sanke_case for backend
	

	function onSignup(e) {

		e.preventDefault();
        setErrors([]);
		
		const signupInfo ={
			first_name,
			last_name,
			email,
			password,
			password_confirmation
		};

		fetch("/users", {
			method: "POST",
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(signupInfo)
		})
		.then(res => {
			if(res.ok){
				res.json().then(userData => {
					args.setCurrentUser(userData)
					history.push('/myreviews')
				})
			} else {
				res.json().then(errors => setErrors(errors.errors))
			}
		})
		toggle();
	}

	const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    };


	return (
	<div>

		<Button id="signupButton" color="success" onClick={toggle}>Sign Up</Button>

		<Modal id="modal" isOpen={modal} toggle={toggle} {...args}>

		<ModalHeader id="signupModalHeader" toggle={toggle}>To sign up, please enter your information below.</ModalHeader>

		<ModalBody  >

			<Form id='signupForm'>
				<Row className="row-cols-lg-auto g-3 align-items-center">
					<Col>
						<Label className="visually-hidden" for="firstName">First name</Label>
						<h6>First name:</h6>
						<Input id="firstName" name="first_name" value={first_name} onChange={handleChange} placeholder="first name" type="text" required/>
					</Col>
					<Col>
						<Label className="visually-hidden" for="lastName"> Last Name</Label>
						<h6>Last name:</h6>
						<Input id="lastName"name="last_name" value={last_name} onChange={handleChange} placeholder="last name" type="text" required/>
					</Col>
					<Col>
						<Label className="visually-hidden" for="exampleEmail">Email</Label>
						<h6>Email:</h6>
						<Input id="exampleEmail" name="email" value={email} onChange={handleChange} placeholder="email address" type="email" required/>
					</Col>
					<Col>
						<Label className="visually-hidden" for="examplePassword">Password</Label>
						<h6>Password:</h6>
						<Input id="examplePassword" name="password" value={password} onChange={handleChange} placeholder="password" type="password"  minLength="5" maxLength="12" required/>
					</Col>
					<Col>
						<Label className="visually-hidden" for="examplePasswordConfirmation">Confirm Password</Label>
						<h6>Confirm Password:</h6>
						<Input  id="examplePasswordConfirmation" name="password_confirmation" value={password_confirmation} onChange={handleChange} placeholder="re-enter password" type="password"  minLength="8" maxLength="16" required/>
					</Col>
					<Col>
						<h6>Password must:</h6>
						<li>Be between 8 and 16 characters</li>
						<li>Contain at least one number</li>
						<li>Contain at least one upper case letter</li>
						<li>Contain at least one lower case letter</li>
						<li>Contain at least one symbol</li>
					</Col>
				</Row>
			</Form>

		</ModalBody>

			<ModalFooter>
				<Button id="signupButtonModal"  onClick={onSignup}>Sign up</Button>{' '}
				<Button id="cancelButtonModal" onClick={toggle}>Cancel</Button>
			</ModalFooter>

		</Modal>

	</div>
	);
};

export default Signup;
