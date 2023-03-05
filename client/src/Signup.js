import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input } from 'reactstrap'; //FormGroup?
import "./Signup.css"








function Signup (args) {

	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const [login, setLogin] = useState("")
	const [errors, setErrors] = useState("")



	function onSubmit(e) {
		e.preventDefault()
		const user ={
			firstName,
			lastName,
			email,
			password
		}
		fetch("/users", {
			method: "POST",
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(user)
		})
		.then(r => {
			if(r.ok){
				r.json().then(user)
			} else {
				r.json().then(e => setErrors(Object.entries(e.errors).flat()))
			}
		})
	}

	function handleClick () {
		onSubmit()
		toggle()
	}



	return (
	<div>

		<Button id="signupButton" color="success" onClick={toggle}>Sign Up</Button>

		<Modal id="modal" isOpen={modal} toggle={toggle} {...args}>
			<ModalHeader toggle={toggle}>To sign up, please enter your information below.</ModalHeader>

			<ModalBody  >
			<Form>
				<Row className="row-cols-lg-auto g-3 align-items-center">
					<Col>
						<Label className="visually-hidden" for="firstName">First name</Label>
						<Input id="firstName" name="firstName" placeholder="first name" type="text" required/>
					</Col>
					<Col>
						<Label className="visually-hidden" for="lastName"> Last Name</Label>
						<Input id="lastName"name="lastName" placeholder="last name" type="text" required/>
					</Col>
					<Col>
						<Label className="visually-hidden" for="exampleEmail">Email</Label>
						<Input id="exampleEmail" name="email" placeholder="email address" type="email" required/>
					</Col>
					<Col>
						<Label className="visually-hidden" for="examplePassword">Password</Label>
						<Input id="examplePassword" name="password" placeholder="password" type="password" maxlength="20" minlength="5" required/>
					</Col>
				</Row>
			</Form>
			</ModalBody>

			<ModalFooter>
				<Button id="signupButtonModal"  onClick={handleClick}      >Sign up</Button>{' '}
				<Button id="cancelButtonModal" onClick={toggle}>Cancel</Button>
			</ModalFooter>

		</Modal>

	</div>
	);
}

export default Signup;