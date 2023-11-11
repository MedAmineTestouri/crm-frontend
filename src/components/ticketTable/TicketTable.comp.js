import React from "react";
import {Table} from 'react-bootstrap'



export const TicketTable =(tickets)=> {
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
                {tickets.tickets.length ? tickets.tickets.map((row )=> 
                (<tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.subject}</td>
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