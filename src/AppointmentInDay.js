import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

const AppointmentInDay = ({ time, patient, dentist, assistant }) => {
  console.log('patient', patient.sick)
  console.log('dentist', dentist)
  console.log('assistant', assistant)
  const patientStyling = { backgroundColor: patient.sick ? 'red' : '' }
  const dentistStyling = { backgroundColor: dentist.sick ? 'red' : '' }
  const assistantStyling = { backgroundColor: assistant.sick ? 'red' : '' }
  return (
    <li className="appointment">
      <div className="time">{format_time(time)}</div>
      <div className="patient" style={patientStyling}>Patiënt: {patient.firstName + " " + patient.lastName}</div>
      <div className="dentist" style={dentistStyling}>Tandarts: {dentist.firstName + " " + dentist.lastName}</div>
      <div className="assistant" style={assistantStyling}>Assistent: {assistant.firstName + " " + assistant.lastName}</div>
    </li>
  )
};

export default AppointmentInDay;