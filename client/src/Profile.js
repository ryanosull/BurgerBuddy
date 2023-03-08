import React from "react";
import "./Profile.css";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';








function Profile({currentUser}) {









    return (
        <div id="cardDiv">
        <Card id="card" style={{height: '20rem'}}>
            <center>
            <CardBody>
                <CardTitle tag="h2">{currentUser.first_name} {currentUser.last_name} </CardTitle>
                <CardSubtitle  tag="h3">{currentUser.email}</CardSubtitle>
                <br/>
                <Button id="edit">Edit Account Info</Button>
                <br/>
                <br/>
                <Button id="delete">Delete Account</Button>
            </CardBody>
            </center>
        </Card>
        </div>
    );
};

export default Profile;