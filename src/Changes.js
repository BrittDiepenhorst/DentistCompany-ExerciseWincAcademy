import React from "react";

function ChangeCalendar() {

    // const [songToAdd, setSongToAdd] = useState({
    // });


    return (
        <div className="ChangeCalendar">
            <div>
                <h3>Patient or Employee sick?</h3>
                <input type="select" name="sick" placeholder="sick"></input>
                {/* {patients} */}
                {/* <button onClick={handleClick}>Submit</button> */}
            </div>

            <div>
                <h3>Add Dentist</h3>
                <input type="text" name="addDentist" placeholder="addDentist"></input>
            </div>

            <div>
                <h3>Add Patient</h3>
                <input type="text" name="addPatient" placeholder="addPatient"></input>
            </div>

            <div>
                <h3>Add Appointment without an assistant</h3>
                <input type="text" name="addAppointment" placeholder="addAppointment"></input>
            </div>

            <div>
                <h3>Add Appointment with an assistant</h3>
                <input type="text" name="addAppointment" placeholder="addAppointment"></input>
            </div>

            <div>
                <h3>Delete Appointment</h3>
                <input type="text" name="deleteAppointment" placeholder="deleteAppointment"></input>
            </div>

            <div>
                <h3>Move Appointment</h3>
                <input type="text" name="moveAppointment" placeholder="moveAppointment"></input>
            </div>
        </div >
    )
};

export default ChangeCalendar;