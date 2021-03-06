// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ViewEmployee from './components/ViewEmployee';
import AddEmployee from './components/AddEmployee';
import ViewEmployeeDetail from './components/ViewEmployeeDetail';
import ViewUsers from './components/ViewUsers';
import Login from './components/Login';
import NameForm from './components/NameForm';

function App() {
  return (
    <Router>
      <div>
      <nav className="nav">
        <Link className="nav-link active" to="/">Home</Link>
        <Link className="nav-link active" to="/view">View Employees</Link>
        <Link className="nav-link active" to="/add">Add Employees</Link>
        <Link className="nav-link active" to="/viewusers">View Users</Link>
        <Link className="nav-link active" to="/login">Login</Link>
        <Link className="nav-link active" to="/nameform">Controlled Comp</Link>
       
    </nav>
    <hr/>


       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/view">
            <ViewEmployee></ViewEmployee>
          </Route>
          <Route  path="/viewusers">
            <ViewUsers></ViewUsers>
          </Route>
          <Route exact path="/viewdetail/:title" component={ViewEmployeeDetail}>
            {/* <ViewEmployeeDetail></ViewEmployeeDetail> */}
          </Route>
          <Route path="/add">
            <AddEmployee></AddEmployee>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/nameform">
            <NameForm></NameForm>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
function NoMatch() {


  return (
    <div>
      <h3>
        No match for this url found
      </h3>
    </div>
  );
}

export default App;
