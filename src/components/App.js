import React from "react";
import SignUp from "./SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ mineHeight: "100vh" }}
    >
      <div className="w-100" style={{ mxaWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
