import React, { useEffect, useState } from 'react'
import { Container , Row ,Col , Button } from "react-bootstrap";
import { BreadcrumbComp } from "../../components/breadcrumb/Breadcrumb.comp";
import { SearchForm } from '../../components/search-form/SearchForm.comp';
import { TicketTable } from "../../components/ticketTable/TicketTable.comp";
import  tickets  from "../../assets/data/dummy-tickets.json";

export const TicketListings= () => {
        const [str,setStr]=useState('')
        const [strFilter,setStrFilter]=useState([tickets])
        useEffect(() => {
            
            
          
        }, [str,strFilter])
        
        const handleOnchange = (e) => {
            setStr(e.target.value)
            FilteredSearch(e.target.value)
            
        }
        
        const FilteredSearch = (sttr) => {
            const filter = tickets.filter(
                row => row.subject.toLowerCase().includes(sttr.toLowerCase()))
                setStrFilter(filter)
                
        }
        
       
        
  return (

    
    <Container>
        <Row>
            <Col>
                <BreadcrumbComp page="Ticket Lists"/>
            </Col>
            
            
        </Row>
        <Row>
            <Col className='mt-4 mb-2'>
                <Button>
                        Add New Ticket
                </Button>
            </Col>
            <Col className='text-right mt-4 mb-2'>
            <SearchForm handleOnchange={handleOnchange} str={str}/>
            </Col>
        </Row>
        <hr/>
        <TicketTable tickets={strFilter}/>
    </Container>
  )
}
