import React, { useEffect, useState } from 'react'
import { Container , Row , Col, Button } from "react-bootstrap";
import { BreadcrumbComp } from '../../components/breadcrumb/Breadcrumb.comp';
import tickets from "../../assets/data/dummy-tickets.json";
import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";
import { Link ,useParams} from "react-router-dom";
// const ticket = tickets[0]
export const Ticket = () => {
    const {tId}=useParams();
    
   
    const [message,setMessage] = useState('')
    const [ticket,setTicket] = useState([])
    useEffect(()=>{
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i].id == tId) {
                setTicket(tickets[i])
                
                continue
            }
            
            
        }
    },[message,tId])
    const handleOnChange = (e) => {
        setMessage(e.target.value)
        console.log(message)
    }
    const handleOnSubmit = () => {
        alert('Form Subitted')
    }

  return (
    <Container>
        <Row>
            <Col>
                <BreadcrumbComp page="Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col className='text-weight-bolder text-secondary'>
               
                <div className='subject'><span className='h6'>subject :</span> <span>{ticket.subject}</span></div>
                <div className='date'><span className='h6'>Ticket Opened :</span> <span>{ticket.status}</span></div>
                <div className='status'><span className='h6'>status :</span> <span>{ticket.addedt}</span></div>
            </Col>
            <Col className='text-right'>
                <Link to="/def/list-tick"><Button  variant='outline-info'>Close Ticket</Button></Link>
            </Col>
        </Row>
        <hr/>
        <Row className='mt-4'>
            <Col>
                <h4>Message History</h4>
                <MessageHistory msg ={ticket.history}/>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
                <UpdateTicket msg={message} 
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}/>
            </Col>
        </Row>
    </Container>
  )
}
