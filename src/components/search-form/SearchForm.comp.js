import React from 'react'
import { PropTypes } from "prop-types";
import { Form ,Row , Col } from "react-bootstrap";

export const SearchForm = ({handleOnchange,str}) => {
    
  return (
    
    <Form>
        <Form.Group as = {Row}>
            <Form.Label  column ms="2"> Search :{""}</Form.Label>
            <Col ms="10">
                <Form.Control
                name='searchStr'
                onChange={handleOnchange}
                value={str}
                placeholder='Search...'/>
            </Col> 
            
                    
            
        </Form.Group>
        
    </Form>
  )
};
SearchForm.propTypes = {
    handleOnchange : PropTypes.func.isRequired,
    str : PropTypes.string.isRequired

}
