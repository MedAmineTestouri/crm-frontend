
import React from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import { Button } from "react-bootstrap";
import { Entry } from "./pages/entry/entry.page";
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/Dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketListings } from './pages/ticket-listing/TicketListings.page';
import { Ticket } from "./pages/ticket/Ticket.page";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";
function App() {
  return (
    
    <div className="App">
      <Routes>
      <Route path="/" element={<Entry/>} />
      
      

      
        <Route path="def" element={<DefaultLayout />}>
            <Route path="dash" element={PrivateRoute() ? <Dashboard/> :<Navigate replace to="/"/>} />
            <Route path="addTick" element={ PrivateRoute() ? <AddTicket/> :<Navigate replace to="/"/>} />
            <Route path="list-tick" element={ PrivateRoute() ? <TicketListings/> :<Navigate replace to="/"/>} />
            <Route path="tick/:tId" element={ PrivateRoute() ? <Ticket/> :<Navigate replace to="/"/>} />
       </Route>
          
            
          </Routes>
        
        
          
    </div>
    
  );
}

export default App;
