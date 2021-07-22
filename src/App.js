
// import './App.css';
import CustomerList from './componensts/CustomerList';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReservationList from './componensts/ReservationList';
import AddCustomer from './componensts/AddCustomer';
import Main from './componensts/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main/>
        {/* <Row>
          <Col> */}
            {/* < CustomerList /> */}
            {/* < AddCustomer />
          </Col>
          <Col>
            <ReservationList />
          </Col>
        </Row> */}
      </header>
    </div>
  );
}

export default App;
