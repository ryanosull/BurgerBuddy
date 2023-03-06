import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import "./Login.css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input } from 'reactstrap'; //FormGroup?


function Login (args) {

    //**********
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    //**********

    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {email, password} = formData

    function onLogin(e){
        e.preventDefault()
        setErrors([])
        const user = {
            email,
            password
        }
        
        fetch(`/login`, {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
        })

        .then(res => {
            if(res.ok){
            res.json().then(user => {
            history.push(`/users/${user.id}`)
            })
            } else {
            // res.json().then(json => setErrors(Object.entries(json.errors)))
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
        <Button id="loginButton" color="success" onClick={toggle}>Log In</Button>
        <Modal id="modal" isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Please enter your email and password below.</ModalHeader>
        <ModalBody>

        <Form >
            <Row className="row-cols-lg-auto g-3 align-items-center">
            <Col>
                <Label className="visually-hidden"for="exampleEmail">Email</Label>
                <Input type='email' name='email' value={email} onChange={handleChange} required placeholder="email" />
            </Col>
            <Col>
                <Label className="visually-hidden"for="examplePassword">Password</Label>
                <Input type='password' name='password' value={password} onChange={handleChange} required minlength="5" maxlength="20" placeholder="password"/>
            </Col>
            </Row>
        </Form>

        {errors ? errors.map( e => window.alert(e)) : null}

        </ModalBody>

        <ModalFooter>
            <Button id="loginButtonModal" type='submit' onClick={onLogin}>Log in!</Button>{' '}
            <Button id="cancelButtonModal" onClick={toggle}>Cancel</Button>
        </ModalFooter>
        </Modal>
    </div>

    );
};


export default Login;































// import React, { useState } from 'react';
// import {useHistory} from 'react-router-dom'
// import "./Login.css"
// // import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input } from 'reactstrap'; //FormGroup?








// function Login () {

//     //**********
//     // const [modal, setModal] = useState(false);

//     // const toggle = () => setModal(!modal);
//     //**********

//     const [formData, setFormData] = useState({
//         email:'',
//         password:''
//     })
//     const [errors, setErrors] = useState([])
//     const history = useHistory()

//     const {email, password} = formData

//     function onSubmit(e){
//         e.preventDefault()
//         setErrors([])
//         const user = {
//             email,
//             password
//         }
        
//         fetch(`/login`, {
//         method:'POST',
//         headers:{'Content-Type': 'application/json'},
//         body:JSON.stringify(user)
//         })

//         .then(res => {
//             if(res.ok){
//             res.json().then(user => {
//             history.push(`/users/${user.id}`)
//             })
//             }else {
//             // res.json().then(json => setErrors(Object.entries(json.errors)))
//             res.json().then(errors => setErrors(errors.errors))
//             }
//         })
    
//     }

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setFormData({ ...formData, [name]: value })
//     }




//     return (

//     <div>
//         <form  onSubmit={onSubmit}>
//             <div >
//                 <label id="email" >Email</label>
//                 <input type='email' name='email' value={email} onChange={handleChange} required />
//             </div>

//             <label id="password" >Password</label>
//             <input type='password' name='password' value={password} onChange={handleChange}
//             required minlength="5" maxlength="20" />
//             <input type='submit' value='Log in!' />
//         </form>

//         {/* {errors ? errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null} */}
//         {errors ? errors.map( e => <div>{e}</div>) : <div>Welcome!</div>}
//         {/* {errors && errors.map( e => <div>{e}</div>)} */}
//     </div>
//     );
// };


// export default Login;



// // // {/* <div>
// // // <Button color="success" onClick={toggle}>Login</Button>
// // // <Modal isOpen={modal} toggle={toggle} {...args}>
// // //   <ModalHeader toggle={toggle}>
// // //     Please enter your email and password below.
// // //   </ModalHeader>
// // //   <ModalBody>
// // //   <Form>
// // //   <Row className="row-cols-lg-auto g-3 align-items-center">
// // //   <Col>
// // //     <Label
// // //     className="visually-hidden"
// // //     for="exampleEmail"
// // //     >
// // //     Email
// // //     </Label>
// // // <Input
// // //   id="exampleEmail"
// // //   name="email"
// // //   placeholder="email address"
// // //   type="email"
// // //   value={email}
// // //   onChange={handleChange}
// // // />
// // // </Col>
// // // <Col>
// // // <Label
// // //   className="visually-hidden"
// // //   for="examplePassword"
// // // >
// // //   Password
// // // </Label>
// // // <Input
// // //   id="examplePassword"
// // //   name="password"
// // //   placeholder="password"
// // //   type="password"
// // //   value={password}
// // //   onChange={handleChange}
// // // />
// // // </Col>
// // // <Col>

// // // </Col>

// // // </Row>
// // // </Form>

// // // {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}

// // //   </ModalBody>
// // //   <ModalFooter>
// // //       <Button color="success" onClick={toggle}>
// // //       Login
// // //       </Button>{' '}
// // //       <Button color="warning" onClick={toggle}>
// // //       Cancel
// // //       </Button>
// // //   </ModalFooter>
// // //   </Modal>
// // // </div>
// // // ); */}