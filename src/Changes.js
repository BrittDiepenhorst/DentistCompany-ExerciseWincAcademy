import React from "react";


function ChangeCalendar({ appointments }) {
    console.log(appointments);

    return (
        <div className="ChangeCalendar">
            <div><h1>Changes for employees</h1>
                <div>
                    <h3>Sickness notification employee</h3>
                    <input type="select" name="sick" placeholder="sick">
                        {/* {appointments.forEach((appointment) => {
                            <label>{appointment}</label>
                        })} */}
                    </input>
                    <button>Submit</button>
                    {/* {patients} */}
                    {/* <button onClick={handleClick}>Submit</button> */}
                </div>
                <div>
                    <h3>Add Dentist</h3>
                    <input type="text" name="addDentist" placeholder="addDentist"></input>
                    <button>Submit</button>
                </div>
            </div>

            <br></br>

            <div><h1>Changes for patients</h1>
                <div>
                    <h3>Sickness notification patient</h3>
                    <input type="select" name="sick" placeholder="sick"></input>
                    <button>Submit</button>
                    {/* {patients} */}
                    {/* <button onClick={handleClick}>Submit</button> */}
                </div>
                <div>
                    <h3>Add Patient</h3>
                    <input type="text" name="addPatient" placeholder="addPatient"></input>
                    <button>Submit</button>
                </div>
            </div>

            <br></br>

            <div><h1>Changes for appointments</h1>
                <div>
                    <h3>Add Appointment without an assistant</h3>
                    <input type="text" name="addAppointment" placeholder="addAppointment"></input>
                    <button>Submit</button>
                </div>

                <div>
                    <h3>Add Appointment with an assistant</h3>
                    <input type="text" name="addAppointment" placeholder="addAppointment"></input>
                    <button>Submit</button>
                </div>

                <div>
                    <h3>Delete Appointment</h3>
                    <input type="text" name="deleteAppointment" placeholder="deleteAppointment"></input>
                    <button>Submit</button>
                </div>

                <div>
                    <h3>Move Appointment</h3>
                    <input type="text" name="moveAppointment" placeholder="moveAppointment"></input>
                    <button>Submit</button>
                </div>
            </div>
        </div >
    )
};

export default ChangeCalendar;