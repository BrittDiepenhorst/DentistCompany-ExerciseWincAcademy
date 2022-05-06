import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";

const sortAppointments = appointments => {
  appointments.sort((a, b) => {
    return a.time - b.time;
  })
};

const Day = ({ appointments }) => {
  sortAppointments(appointments);
  const appointmentsJSX = appointments.map(
    ({ time, patient, dentist, assistant }, index) => (
      <AppointmentInDay
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        key={index}
      />
    )
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};

export default Day;