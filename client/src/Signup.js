import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormText, Row, Col, Label, Input } from 'reactstrap'; //FormGroup?
import "./Signup.css"



// 07/01 need to add password confirmation input field, etc. 
//		and note case sensitivity, length




function Signup (args) {


	//**********
	const [modal, setModal] = useState(false)
	

	const toggle = () => {
        setModal(!modal)
        setFormData("")
    };

	const toggleOnSignup = () => {
		setModal(!modal)
	}

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

		<ModalHeader id="signupModalHeader" toggle={toggle}>
			To sign up, please enter your information below.
		</ModalHeader>

		<ModalBody  >

			<Form id='signupForm' onSubmit={onSignup}>


				<Row className="row-cols-lg-auto g-3 align-items-center">
					<Col>
						<Label className='inputLabels' for="firstName">First name:</Label>
						<Input id="firstName" name="first_name" value={first_name} onChange={handleChange} placeholder="first name" type="text" required/>
					</Col>
					<Col>
						<Label className='inputLabels' for="lastName">Last Name:</Label>
						<Input id="lastName"name="last_name" value={last_name} onChange={handleChange} placeholder="last name" type="text" required/>
					</Col>
					<Col>
						<Label className='inputLabels' for="email">Email:</Label>
						<Input id="email" name="email" value={email} onChange={handleChange} placeholder="name@example.com" type="email" required/>
					</Col>
					<Col>
						<Label className='inputLabels' for="password">Password:</Label>
						<Input id="password" name="password" value={password} onChange={handleChange} placeholder="password" type="password"  minLength="8" maxLength="16" required/>
					</Col>
					<Col>
						<Label className='inputLabels' for="passwordConfirmation">Confirm Password:</Label>
						<Input  id="passwordConfirmation" name="password_confirmation" value={password_confirmation} onChange={handleChange} placeholder="re-enter password" type="password"  minLength="8" maxLength="16" required/>
					</Col>
					<Col>
						<FormText className='formText'>
							Passwords must be between 8 and 16 characters and contain at least one number (9), upper case letter (Z), lower case letter (a), and symbol (!). Passwords are case sensitive!
						</FormText>
					</Col>
				</Row>
				<br/>
				<ModalFooter>
					<Button id="cancelButtonModal" onClick={toggle}>Cancel</Button>
					<Button id="signupButtonModal" type="submit" onClick={toggleOnSignup} >Sign up</Button>
				</ModalFooter>


			</Form>

		</ModalBody>


		</Modal>

	</div>
	);
};

export default Signup;
