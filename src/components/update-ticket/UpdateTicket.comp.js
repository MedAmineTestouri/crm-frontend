import React from 'react'
import PropTypes from 'prop-types';
import { Form , Button  } from "react-bootstrap";
export const UpdateTicket = ({msg,handleOnChange,handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label> <h4>Reply</h4></Form.Label>
        <Form.Text>Please Reply here or Update the Ticket:</Form.Text>
        <Form.Control 
        value={msg}
        onChange={handleOnChange}
        as = "textarea"
        row="5"
        name="detail"/>
        <div className='text-right mt-4 mb-3'>
            <Button  variant="info" type="submit" >
                Reply
            </Button>
        </div>

    </Form>
  )
};
UpdateTicket.propTypes = {
    handleOnchange : PropTypes.func.isRequired,
    msg : PropTypes.string.isRequired ,
    handleOnSubmit : PropTypes.func.isRequired 
    
}
