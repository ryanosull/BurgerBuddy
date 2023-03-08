import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input } from 'reactstrap'; //FormGroup?
import "./Signup.css"








function Signup (args) {
	//
	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)
	//

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
        password:''
    })

	const {first_name, last_name, email, password} = formData

	function onSignup() {
		
		const user ={
			first_name,
			last_name,
			email,
			password
		}
		fetch("/users", {
			method: "POST",
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(user)
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
		toggle()
	}

	const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }



	return (
	<div>

		<Button id="signupButton" color="success" onClick={toggle}>Sign Up</Button>

		<Modal id="modal" isOpen={modal} toggle={toggle} {...args}>
			<ModalHeader id="signupModalHeader" toggle={toggle}>To sign up, please enter your information below.</ModalHeader>

			<ModalBody  >
			<Form >
				<Row className="row-cols-lg-auto g-3 align-items-center">
					<Col>
						<Label className="visually-hidden" for="firstName">First name</Label>
						<Input id="firstName" name="first_name" value={first_name} onChange={handleChange} placeholder="first name" type="text" required/>
					</Col>
					<Col>
						<Label className="visually-hidden" for="lastName"> Last Name</Label>
						<Input id="lastName"name="last_name" value={last_name} onChange={handleChange} placeholder="last name" type="text" required/>
					</Col>
					<Col>
						<Label className="visually-hidden" for="exampleEmail">Email</Label>
						<Input id="exampleEmail" name="email" value={email} onChange={handleChange} placeholder="email address" type="email" required/>
					</Col>
					<Col>
						<Label className="visually-hidden" for="examplePassword">Password</Label>
						<Input id="examplePassword" name="password" value={password} onChange={handleChange} placeholder="password" type="password" maxlength="20" minlength="5" required/>
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
}

export default Signup;
