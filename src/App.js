import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";
import Changes from "./Changes";

import generateRandomAppointments from "./utils";

const NUM_APPOINTMENTS = 150;
const appointments = generateRandomAppointments(NUM_APPOINTMENTS);
console.log(appointments);

// const NUM_DENTISTS = 4;
// const NUM_ASSISTANTS = 2;
// const NUM_PATIENTS = 50;

function App() {
  // const [appointments, setAppointments] = useState([{}])
  const [appointment, setAppointment] = useState({ appointments });
  const [dentist, setDentist] = useState();
  const [assistant, setAssistant] = useState();
  const [patient, setPatient] = useState();

  return (
    < Router >
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar view</Link>
            </li>
            <li>
              <Link to="/day">Day view</Link>
            </li>
            <li>
              <Link to="/changes">Change Calendar</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Switch>
            <Route path="/calendar">
              <Calendar appointments={appointments} />
            </Route>
            <Route path="/day">
              <Day appointments={appointments.filter(app => app.day === 1)} />
            </Route>
            <Route path="/changes">
              <Changes appointments={appointments} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router >
  )
}
export default App;
