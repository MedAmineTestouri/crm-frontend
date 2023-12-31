import React from "react";
import {Table} from 'react-bootstrap'
import { Link } from "react-router-dom";



export const TicketTable =(tickets) => {
    const ticketss = tickets.tickets
    return (
       
        <Table bordered hover>
            
            <thead>
                <tr>
                    <th>#c</th>
                    <th>Subjects</th>
                    <th>Status</th>
                    <th>Opened Date</th>
                </tr>
            </thead>
            <tbody>
                {ticketss.length ? ticketss.map((row )=> 
                (   <tr key={row.id}>
                        <td>{row.id}</td>
                       <td><Link to={`/def/tick/${row.id}`}>{row.subject}</Link> </td>
                        <td>{row.status}</td>
                        <td>{row.addedt}</td>
                    </tr>
            )) :
            <tr ><td colSpan="4" className="text-center"><h3>No Data!</h3></td></tr>
            
        }
                
            </tbody>

        </Table>
       
        
    )
}