import React from 'react'
import {Container, Row, Col,Button} from 'react-bootstrap'
import { TicketTable } from '../../components/ticketTable/TicketTable.comp'
import tickets from "../../assets/data/dummy-tickets.json"
import { BreadcrumbComp } from '../../components/breadcrumb/Breadcrumb.comp'
import { Link } from "react-router-dom";
export const Dashboard = ()=> {
    return (
        <Container>
            <Row>
                <Col>
                    <BreadcrumbComp page="Dashboard" />
                </Col>
            </Row>
                <Row>
                    <Col className='text-center mt-5 mb-2'>
                        <Link to="/def/addTick">
                            <Button variant="info" style= {{'fontSize':'2rem','padding':'10px 30px'}}>
                                Add New Ticket
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center mb-2'>
                        <div>
                            Total tickets : 50
                        </div>
                        <div>
                            Pending tickets : 5
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col className='mt-2'>
                        <div>
                           Recently Added Tickets
                        </div>
                       
                    </Col>
                </Row>
                <Row>
                    <Col className='recent-ticket'>
                        <TicketTable tickets={tickets}/>
                        
                       
                    </Col>
                </Row>
        </Container>
    )
}