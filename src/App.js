
import './App.css';
import { Button } from "react-bootstrap";
import { Entry } from "./pages/entry/entry.page";
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/Dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketListings } from './pages/ticket-listing/TicketListings.page';
import { Ticket } from "./pages/ticket/Ticket.page";

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
      {/* <Dashboard/> */}
      {/* <AddTicket /> */}
      {/* <TicketListings/> */}
      <Ticket/>
      </DefaultLayout>
        
      


    </div>
  );
}

export default App;
