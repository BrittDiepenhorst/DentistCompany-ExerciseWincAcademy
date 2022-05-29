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

const dentists = appointments.map(appointment => appointment.dentist);
const patients = appointments.map(appointment => appointment.patient);
const assistants = appointments.map(appointment => appointment.assistant);

function App() {
  const [dentist, setDentist] = useState({});
  const [patient, setPatient] = useState({});
  const [assistant, setAssistant] = useState({});
  const [patientToAdd, setAddPatient] = useState({});
  const [dentistToAdd, setAddDentist] = useState({});

  const makeDentistSick = (employee) => {
    console.log('You clicked submit.', employee, employee.dentist.id);

    const sickEmployee = dentists.find(dentist => dentist.id === employee.dentist.id);
    sickEmployee.sick = true;
    console.log(sickEmployee);

    setDentist({
      ...dentist,
      sickEmployee
    });
  };

  const makePatientSick = (patientX) => {
    console.log('You clicked submit.', patientX, patientX.patient.id);

    const sickPatient = patients.find(patient => patient.id === patientX.patient.id);
    sickPatient.sick = true;
    console.log(sickPatient);

    setPatient({
      ...patient,
      sickPatient
    });
  };

  const makeAssistantSick = (assitantX) => {
    console.log('You clicked submit.', assitantX, assitantX.assistant.id);

    const sickAssistant = assistants.find(assistant => assistant.id === assitantX.assistant.id);
    sickAssistant.sick = true;
    console.log(sickAssistant);

    setAssistant({
      ...assistant,
      sickAssistant
    });
  };

  const addPatient = (personToAdd) => {
    console.log(personToAdd);
    setAddPatient({
      ...patientToAdd,
      personToAdd
    });
  };

  const addDentist = (dentistPersonToAdd) => {
    console.log(dentistPersonToAdd);
    setAddDentist({
      ...dentistToAdd,
      dentistPersonToAdd
    });
  };

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
              <Form appointments={appointments} addPatient={addPatient} addDentist={addDentist} makeDentistSick={makeDentistSick} makePatientSick={makePatientSick} makeAssistantSick={makeAssistantSick} />
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
