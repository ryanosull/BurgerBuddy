import React, {useState} from "react";
import {useHistory} from 'react-router-dom'
import "./Profile.css";
import { Card, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input } from 'reactstrap';

//07/01 password confirmation - need to add this here: input, etc.
// 07/05 not certain delete acct is working...
function Profile(args) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [errors, setErrors] = useState("")
    const history = useHistory()    

    const [formData, setFormData] = useState({
        first_name:'',
		last_name: '',
        email:'',
        password:''
    })

    const {first_name, last_name, email, password} = formData

    function onEdit() {
		
		const user ={
			first_name,
			last_name,
			email,
			password
		}
		fetch(`/users/${args.currentUser.id}`, {
			method: "PATCH",
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(user)
		})
		.then(res => {
			if(res.ok){
				res.json().then(userData => {
                    // userData [...args.currentUser, userData]
                    args.editUserInfo(userData)
					history.push('/myreviews') //should probably be history.push('/myprofile')
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


    //hmmmm
    function handleDeleteAcct() {
        fetch(`/users/${args.currentUser.id}`, {
            method: 'DELETE'
        })
        history.push(`/`)
    }


    return (
        <div id="cardDiv">
        <Card id="card" style={{height: '20rem'}}>
            <center>
            <CardBody>
                <CardTitle tag="h2">{args.currentUser.first_name} {args.currentUser.last_name} </CardTitle>
                <CardSubtitle  tag="h3">{args.currentUser.email}</CardSubtitle>
                <br/>



                {/* <Button id="edit">Edit Account Info</Button> */}

                <div>
                <Button id="edit" onClick={toggle}>Edit Account Info</Button>
                <Modal id="editModal" isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader id="modalHeader" toggle={toggle}>Make changes to your account information below.</ModalHeader>

                <ModalBody>
                
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
                            <Input id="examplePassword" name="password" value={password} onChange={handleChange} placeholder="password" type="password" maxLength="16" minLength="6" required/>
                        </Col>
                    </Row>
			    </Form>

                </ModalBody>

                <ModalFooter>
                <Button id="submitButton"  onClick={onEdit}>Submit Changes</Button>{' '}
                <Button id="cancelButton" color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
    </div>


                <br/>
                <br/>
                <Button id="delete" onClick={handleDeleteAcct}>Delete Account</Button>
            </CardBody>
            </center>
        </Card>
        </div>
    );
};

export default Profile;