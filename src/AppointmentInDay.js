import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, dentist, assistant }) => {
  return (
    <li className="appointment">
      <div className="time">{format_time(time)}</div>
      <div className="patient">Patiënt: {patient.firstName + " " + patient.lastName}</div>
      <div className="dentist">Tandarts: {dentist.firstName + " " + dentist.lastName}</div>
      <div className="assistant">Assistent: {assistant.firstName + " " + assistant.lastName}</div>
    </li>
  )
};