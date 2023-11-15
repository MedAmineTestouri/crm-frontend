import React , {useState,useEffect} from 'react'
import {Container , Row , Col} from 'react-bootstrap'
import { BreadcrumbComp } from '../../components/breadcrumb/Breadcrumb.comp'

import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp'
import { shortText } from '../../utils/validation'
const initialFrmDT = {
    subject:"",
    issueDate:"",
    details:"",
}
const initialFrmErr = {
    subject:false,
    issueDate:false,
    details:false,
}
export const AddTicket = () => {
    const [FrmData , setFrmData] = useState(initialFrmDT)
    const [FrmDataErr , setFrmDataErr] = useState(initialFrmErr)
    useEffect(()=>{},[FrmData,FrmDataErr]);
    const handleOnchange = (e) => {
        const {name , value} = e.target ;
        setFrmData (
            {
               ...FrmData ,
               [name]:value,
            }
        )
        console.log (name,value);
    }
    const handleOnSubmit = async (e) => {
            e.preventDefault()
            setFrmDataErr(initialFrmErr)
            const isSubjectValid = await shortText(FrmData.subject)
            const isDetailsValid = await shortText(FrmData.details)
             setFrmDataErr({
                ...initialFrmErr ,
                subject : !isSubjectValid,
                details : !isDetailsValid
            })
    }
    return (
        <Container>
            <Row>
                <Col>
                    <BreadcrumbComp page="New Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm handleOnchange ={handleOnchange}
                                    FrmDt = {FrmData} 
                                    handleOnSubmit ={handleOnSubmit}
                                    FrmDataErr = {FrmDataErr}/>
                </Col>
            </Row>
        </Container>
    )
}