import React, { useState } from "react";

function Form({ appointments, addPatient, makeSick }) {
    console.log(appointments);

    const [employee, setEmployee] = useState({});

    const handleChange = (e) => {
        e.preventDefault();
        const appointment = appointments.find(appointment => appointment.dentist.firstName + " " + appointment.dentist.lastName === e.target.value);
        const dentist = appointment.dentist;
        console.log(dentist);
        console.log(appointment);
        console.log(appointment.dentist);
        console.log(appointment.dentist.id);
        setEmployee({
            ...employee,
            dentist
        });
    };

    return (
        <div className="ChangeCalendar">
            <div>
                <h1>Changes for employees</h1>

                <div>
                    <h3>Sickness notification employee</h3>
                    <select type="select" name="sick" placeholder="sick" onChange={handleChange}>
                        {appointments.map(appointment => (
                            <option key={appointment.dentist.id} id={appointment.dentist.id}>{appointment.dentist.firstName + " " + appointment.dentist.lastName}</option>
                        ))}
                    </select>
                    <button onClick={() => makeSick(employee)}>Submit</button>
                </div>

                <br />

                <div>
                    <h3>Add Dentist</h3>
                    <input type="text" name="addDentist" placeholder="First Name"></input>
                    <input type="text" name="addDentist" placeholder="Last Name"></input>
                    <input type="text" name="addDentist" placeholder="Email"></input>
                    <input type="text" name="addDentist" placeholder="Phone number"></input>
                    <button>Submit</button>
                </div>
            </div>

            <br />

            <div>
                <h1>Changes for patients</h1>

                <div>
                    <h3>Sickness notification patient</h3>
                    <select type="select" name="sick" placeholder="sick">
                        {appointments.map(appointment => (
                            <option key={appointment.patient.id} id={appointment.patient.id}>{appointment.patient.firstName + " " + appointment.patient.lastName}</option>
                        ))}
                    </select>
                    <button /* onClick={makeSick}*/ >Submit</button>
                </div>

                <br />

                <div>
                    <h3>Add Patient</h3>
                    <input type="text" name="addPatient" placeholder="First Name"></input>
                    <input type="text" name="addPatient" placeholder="Last Name"></input>
                    <input type="text" name="addPatient" placeholder="Email"></input>
                    <input type="text" name="addPatient" placeholder="Phone number"></input>
                    <button onClick={addPatient}>Submit</button>
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