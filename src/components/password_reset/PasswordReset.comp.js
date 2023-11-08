import React, { useState } from "react";
import {Container,Row,Col,Form, Button} from "react-bootstrap";
import PropTypes from 'prop-types';
 
export const ResetPassword = ({handleOnchange,email,handleOnSubmit,frmSwitcher,handleOnResetSubmit}) => {
    
    return(
        <Container >
            <Row>
                <Col>
                <h1 className="text-info text-center">
                    Reset Password
                </h1>
                <hr/>
                <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
                   
                    <Button type="submit" style={{margin:'10px'}} >Reset Password</Button>
                </Form>
                <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#!"onClick={()=>frmSwitcher('login')}>Loging Now!</a>
                </Col>
            </Row>
           
            
            
        </Container>
    )
};
ResetPassword.propTypes = {
    handleOnchange : PropTypes.func.isRequired ,
    handleOnResetSubmit : PropTypes.func.isRequired ,
    frmSwitcher : PropTypes.func.isRequired ,
    email : PropTypes.string.isRequired
}