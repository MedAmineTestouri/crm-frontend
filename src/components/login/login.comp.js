import React, { useState } from "react";
import {Container,Row,Col,Form, Button} from "react-bootstrap";
import PropTypes from 'prop-types';
 
export const LoginForm = ({handleOnchange,email,pass,handleOnSubmit,frmSwitcher}) => {
    
    return(
        <Container >
            <Row>
                <Col>
                <h1 className="text-info text-center">
                    Client Login
                </h1>
                <hr/>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group>

                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={handleOnchange}
                            required
                        />
                    </Form.Group> 
                    <Form.Group>

                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={pass}
                            onChange={handleOnchange}
                            required
                        />
                    </Form.Group> 
                    <Button type="submit" style={{margin:'10px'}} >Login</Button>
                </Form>
                <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#!" onClick={()=>frmSwitcher('reset')}> Forget Password ?</a>
                </Col>
            </Row>
           
            
            
        </Container>
    )
};
LoginForm.propTypes = {
    handleOnchange : PropTypes.func.isRequired ,
    handleOnSubmit : PropTypes.func.isRequired ,
    frmSwitcher : PropTypes.func.isRequired ,
    email : PropTypes.string.isRequired ,
    pass : PropTypes.string.isRequired
}