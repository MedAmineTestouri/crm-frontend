import React, { useEffect } from 'react'
import {Form , Button, Row , Col} from 'react-bootstrap'
import {PropTypes} from 'prop-types'
import '../add-ticket-form/add-ticket.style.css'


export const AddTicketForm = ({handleOnchange,FrmDt,handleOnSubmit,FrmDataErr}) => {
    console.log(FrmDt);
    
    return (
        <div className='jumbotron-ticket'>
            <h1 className='text-center text-info mb-5'>Add New Ticket</h1>
             <Form autoComplete="off" onSubmit={handleOnSubmit}>
                        <Form.Group as = {Row}>

                            <Form.Label column sm={3}>Subject</Form.Label>
                            <Col column sm={9}>
                            <Form.Control
                                type="text"
                                name="subject"
                                placeholder=""
                                value={FrmDt.subject}
                                onChange={handleOnchange}
                                required
                            />
                            <Form.Text className='text-danger'>{FrmDataErr.subject && "subject is required :)"}</Form.Text>
                            </Col>
                        </Form.Group> 
                        <Form.Group as = {Row}>

                        <Form.Label column sm={3}>Date</Form.Label>
                        <Col column sm={9}>
                        <Form.Control
                            type="date"
                            name="issueDate"
                            placeholder=""
                            value={FrmDt.issueDate}
                            onChange={handleOnchange}
                            required
                        />
                        </Col>
                        </Form.Group>
                        <Form.Group as = {Row}>

                        <Form.Label column sm={3} >Details</Form.Label>
                        <Col column sm={9}>
                        
                        <Form.Control
                            type="textarea"
                            name="details"
                            placeholder=""
                            value={FrmDt.details}
                            onChange={handleOnchange}
                            required
                        />
                        <Form.Text className='text-danger'>{FrmDataErr.details && "details need to be greater than 3 caracters :)"}</Form.Text>
                        </Col>
                        </Form.Group>
                        
                   
                    <Button className='bg-info' type="submit" style={{margin:'10px'}} block>Add Ticket</Button>
                </Form>
        </div>
    )
};
AddTicketForm.propTypes = {
    handleOnchange : PropTypes.func.isRequired,
    handleOnSubmit : PropTypes.func.isRequired,
    FrmDt : PropTypes.object.isRequired,
    FrmDataErr : PropTypes.object.isRequired

}