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
        setFormData("")
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

    // function onLogin(e){

    //     e.preventDefault();
    //     setErrors([]);

    //     const loginInfo = {
    //         email,
    //         password
    //     };
        
    //     fetch(`/login`, {
    //     method:'POST',
    //     headers:{'Content-Type': 'application/json'},
    //     body:JSON.stringify(loginInfo)
    //     })
    //     .then(res => {
    //         if(res.ok){
    //         res.json().then(userData => {
    //         args.setCurrentUser(userData)
    //         history.push(`/myreviews`)
    //         })
    //         } else {
    //         // res.json().then(json => setErrors(Object.entries(json.errors)))
    //         res.json().then(errors => setErrors(errors.errors))
    //         }
    //     })
    //     // toggle() - removed this for error handling; modal would close before errors could be displayed. 
    // };


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
        .then(user => {
            if (!user.errors) {
                localStorage.uid = user.id
                args.setCurrentUser(user.id)
                history.push(`/myreviews`)
            } else {
                user.errors.forEach(e => alert(e))
                // user.json().then(errors => setErrors(errors.errors))
                setFormData("")
            }
        })

    // const onLogin = () => {

    // }

    // const onLogin = (e) => {
    //     e.preventDefault()

        // fetch("/login", { //"/auto_login"
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //         Accept: 'application/json'
        //     },
        //     body: JSON.stringify(loginInfo)
        // })
        // .then(r => r.json())
        // .then(user => {
        //     if (!user.errors) {
        //         localStorage.uid = user.id
        //         args.setCurrentUser(user.id)
        //         history.push(`/myreviews`)
        //     } else {
        //         user.errors.forEach(e => alert(e))
        //         // user.json().then(errors => setErrors(errors.errors))
        //         setFormData("")
        //     }
        // })
    }


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
                    <Input type='password' name='password' value={password} onChange={handleChange} required minlength="8" maxlength="16" placeholder="password"/>
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