import { names } from "./names";

const getRandomFirstName = () => {
  const person = names[Math.floor(Math.random() * 250)];
  return `${person.name}`;
};

const getRandomLastName = () => {
  const person = names[Math.floor(Math.random() * 250)];
  return `${person.surname}`;
};

const emails = [
  "@gmail.com",
  "@hotmail.com",
  "@ziggo.nl",
  "@outlook.com"
];

const generateEmail = (email) => {
  let index = Math.floor(Math.random() * emails.length);
  return emails[index];
};

const generateUniqueID = () => {
  return Math.random();
};

const getRandomDate = () => {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  return new Date(timestamp);
};

const generatePerson = () => {
  const generatePerson = {
    firstName: getRandomFirstName(),
    lastName: getRandomLastName(),
    id: generateUniqueID(),
    phoneNumber: "06" + Math.floor(Math.random() * 100000000),
    sick: false,
  }
  return generatePerson;
};

const generatePatient = () => {
  const person = generatePerson()
  const patientDetails = {
    email: person.firstName.split(' ')[0] + person.lastName + generateEmail(),
    birthday: getRandomDate(),
  }
  const patient = {
    ...person,
    ...patientDetails
  }
  return patient;
};

const generateEmployee = () => {
  const person = generatePerson()
  const employeeDetails = {
    email: person.firstName.split('')[0] + "." + person.lastName + "@dentistcompanybvt.com",
  }
  const employee = {
    ...person,
    ...employeeDetails
  }
  return employee;
};

// DATE
const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;


// APPOINTMENT 
// const generateRandomAppointment = ({ dentists, assistants, patients }) => {
//   const appointment = {
//     day: getRandomDay(),
//     time: getRandomTime(),
//     patient: generatePatient(patients).id,
//     dentist: generateEmployee(dentists).id,
// assistant: generateEmployee(),
// }
// if (getRandomInteger(0, 2) === 1)
//   appointment.assistant = getRandomItem(assistants).id;
// return appointment;
// };

const generateRandomAppointment = () => ({
  day: getRandomDay(),
  time: getRandomTime(),
  patient: generatePatient(names),
  dentist: generateEmployee(names),
  assistant: generateEmployee(names),
});

const generateRandomAppointments = num =>
  Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment());

export default generateRandomAppointments;

const getInitialState = () => {
  const NUM_DENTISTS = 4;
  const NUM_ASSISTANTS = 2;
  const NUM_PATIENTS = 50;
  const NUM_APPOINTMENTS = 10;
  const people = {
    dentists: NUM_DENTISTS * generateEmployee,
    patients: NUM_PATIENTS * generatePatient,
    assistants: NUM_ASSISTANTS * generateEmployee,
  };
  const appointments = generateRandomAppointments(people, NUM_APPOINTMENTS);
  return { ...people, ...{ appointments } };
};

export { getInitialState };