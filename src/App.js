
import './App.css';
import { Button } from "react-bootstrap";
import { Entry } from "./pages/entry/entry.page";
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/Dashboard/Dashboard.page';

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
      <Dashboard/>
      </DefaultLayout>
        
      


    </div>
  );
}

export default App;
