import React, { useState } from "react";
import "./App.css";
import "./Day.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";
import Form from "./Form";
import generateRandomAppointments from "./utils/utils"

const appointments = generateRandomAppointments(150);

// const patients = appointments.patient;
const dentists = appointments.map(appointment => appointment.dentist);
console.log(dentists);

function App() {
  const [dentist, setDentist] = useState({});
  // let [sickPeople, setSickPeople] = useState({ dentist: [], assistant: [], patient: [] })
  // const [patient, setPatients] = useState({ patients });
  // const [employees, setEmployee] = useState({ appointments });

  const makeSick = (employee) => {
    console.log('You clicked submit.');
    console.log(employee);
    console.log(employee.dentist.id);

    const sickEmployee = dentists.find(dentist => dentist.id === employee.dentist.id);
    sickEmployee.sick = true;

    console.log(sickEmployee);

    setDentist({
      ...dentist,
      sickEmployee
    });

    const makeRed = () => {
      const element = document.getElementsByClassName('dentist');
      console.log(element);
      // element.classList.toggle('red');
    };

    if (sickEmployee.sick === true) {
      makeRed(sickEmployee);
    };

    console.log(employee);

    // setSickPeople({
    //   ...sickPeople,
    //   [sickPeople.dentist]: employee,
    // });
    // console.log(sickPeople.dentist);
  };

  // const addPatient = (firstName, lastName, phoneNumber, emailAddress) => {
  //   setPatients([
  //     ...patients,
  //     {
  //       id: patients.length + 1,
  //       firstName,
  //       lastName,
  //       phoneNumber,
  //       emailAddress
  //     }
  //   ])
  // }

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
              <Link to="/form">Form to change the calendar</Link>
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
            <Route path="/form">
              <Form appointments={appointments} /* addPatient={addPatient} */ makeSick={makeSick} />
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
