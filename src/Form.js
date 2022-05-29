import React, { useState } from "react";

function Form({ appointments, addPatient, addDentist, makeDentistSick, makePatientSick, makeAssistantSick }) {
    console.log(appointments);

    const [dentist, setDentist] = useState({});
    const [patient, setPatient] = useState({});
    const [assistant, setAssistant] = useState({});
    const [personToAdd, setPerson] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
    });

    const [dentistPersonToAdd, setDentistPerson] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
    });

    const handleChangeDentist = (e) => {
        e.preventDefault();
        const appointment = appointments.find(appointment => appointment.dentist.firstName + " " + appointment.dentist.lastName === e.target.value);
        const dentist = appointment.dentist;
        console.log(dentist, appointment, appointment.dentist, appointment.dentist.id);
        setDentist({
            ...dentist,
            dentist
        });
    };

    const handleChangePatient = (e) => {
        e.preventDefault();
        const appointment = appointments.find(appointment => appointment.patient.firstName + " " + appointment.patient.lastName === e.target.value);
        const patient = appointment.patient;
        console.log(patient, appointment, appointment.patient, appointment.patient.id);
        setPatient({
            ...patient,
            patient
        });
    };

    const handleChangeAssistant = (e) => {
        e.preventDefault();
        const appointment = appointments.find(appointment => appointment.assistant.firstName + " " + appointment.assistant.lastName === e.target.value);
        const assistant = appointment.assistant;
        console.log(assistant, appointment, appointment.assistant, appointment.assistant.id);
        setAssistant({
            ...assistant,
            assistant
        });
    };

    const generateUniqueID = () => {
        return Math.random();
    };

    const handleChangeAddPerson = (e) => {
        setPerson({
            ...personToAdd, [e.target.name]: e.target.value,
            id: generateUniqueID(),
        });
    };

    const handleChangeAddDentist = (e) => {
        setDentistPerson({
            ...dentistPersonToAdd, [e.target.name]: e.target.value,
            id: generateUniqueID(),
        });
    };

    return (
        <div className="ChangeCalendar">
            <div>
                <h1>Changes for employees</h1>

                <div>
                    <h3>Sickness notification dentist</h3>
                    <select type="select" name="sick" placeholder="sick" onChange={handleChangeDentist}>
                        {appointments.map(appointment => (
                            <option
                                key={appointment.dentist.id}
                                id={appointment.dentist.id}>
                                {appointment.dentist.firstName + " " + appointment.dentist.lastName}
                            </option>
                        ))}
                    </select>
                    <button onClick={() => makeDentistSick(dentist)}>Submit</button>
                </div>

                <br />

                <div>
                    <h3>Sickness notification assistant</h3>
                    <select type="select" name="sick" placeholder="sick" onChange={handleChangeAssistant}>
                        {appointments.map(appointment => (
                            <option
                                key={appointment.assistant.id}
                                id={appointment.assistant.id}>
                                {appointment.assistant.firstName + " " + appointment.assistant.lastName}
                            </option>
                        ))}
                    </select>
                    <button onClick={() => makeAssistantSick(assistant)}>Submit</button>
                </div>

                <br />

                <div>
                    <h3>Add Dentist</h3>
                    <input type="text" name="firstName" placeholder="First Name" value={dentistPersonToAdd.firstName} onChange={handleChangeAddDentist}></input>
                    <input type="text" name="lastName" placeholder="Last Name" value={dentistPersonToAdd.lastName} onChange={handleChangeAddDentist}></input>
                    <input type="text" name="email" placeholder="Email" value={dentistPersonToAdd.email} onChange={handleChangeAddDentist}></input>
                    <input type="text" name="phoneNumber" placeholder="Phone number" value={dentistPersonToAdd.phoneNumber} onChange={handleChangeAddDentist}></input>
                    <button onClick={() => addDentist(dentistPersonToAdd)}>Submit</button>
                </div>
            </div>

            <br />

            <div>
                <h1>Changes for patients</h1>

                <div>
                    <h3>Sickness notification patient</h3>
                    <select type="select" name="sick" placeholder="sick" onChange={handleChangePatient}>
                        {appointments.map(appointment => (
                            <option
                                key={appointment.patient.id}
                                id={appointment.patient.id}>
                                {appointment.patient.firstName + " " + appointment.patient.lastName}
                            </option>
                        ))}
                    </select>
                    <button onClick={() => makePatientSick(patient)}>Submit</button>
                </div>

                <br />

                <div>
                    <h3>Add Patient</h3>
                    <input type="text" name="firstName" placeholder="First Name" value={personToAdd.firstName} onChange={handleChangeAddPerson}></input>
                    <input type="text" name="lastName" placeholder="Last Name" value={personToAdd.lastName} onChange={handleChangeAddPerson}></input>
                    <input type="text" name="email" placeholder="Email" value={personToAdd.email} onChange={handleChangeAddPerson}></input>
                    <input type="text" name="phoneNumber" placeholder="Phone number" value={personToAdd.phoneNumber} onChange={handleChangeAddPerson}></input>
                    <button onClick={() => addPatient(personToAdd)}>Submit</button>
                </div>
            </div>

            <br />

            <div><h1>Changes for appointments</h1>
                <div>
                    <h3>Add Appointment without an assistant</h3>
                    <input type="text" name="addAppointment" placeholder="addAppointment"></input>
                    <button>Submit</button>
                </div>

                <br />

                <div>
                    <h3>Add Appointment with an assistant</h3>
                    <input type="text" name="addAppointment" placeholder="addAppointment"></input>
                    <button>Submit</button>
                </div>

                <br />

                <div>
                    <h3>Delete Appointment</h3>
                    <input type="text" name="deleteAppointment" placeholder="deleteAppointment"></input>
                    <button>Submit</button>
                </div>

                <br />

                <div>
                    <h3>Move Appointment</h3>
                    <input type="text" name="moveAppointment" placeholder="moveAppointment"></input>
                    <button>Submit</button>
                </div>
            </div>
        </div >
    )
};

export default Form;