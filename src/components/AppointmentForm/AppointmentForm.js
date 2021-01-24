import React from 'react';
import { ConfirmButton, SelectButton, DateTimeButton } from '../buttons';
import './AppointmentForm.css';

const donationType = ["טרומבוציטים", "גרנולוציטים"];
const hospitalName = ["איכילוב", "תל השומר", "בילינסון", "הדסה", "רמב״ם", "סורוקה"]
const squaresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const AppointmentForm = () => {
  const [donation, setDonation] = React.useState('');
  const [hospital, setHospital] = React.useState('');
  const [date, setDate] = React.useState('');
  const [hour, setHour] = React.useState('');
  const [squares, setSquares] = React.useState('');

  const handleSubmit = () => {

  }

  return (
    <div >
      <form row onSubmit={handleSubmit}>
        <SelectButton header={"תרומת"} content={donationType}
          setData={setDonation} data={donation}>
        </SelectButton>
        <SelectButton header={"בית חולים"} content={hospitalName}
          setData={setHospital} data={hospital}>
        </SelectButton>
        <DateTimeButton header={"תאריך ושעה"} date={date} setDate={setDate}
          hour={hour} setHour={setHour}>
        </DateTimeButton>
        <SelectButton header={"משבצות"} content={squaresNum}
          setData={setSquares}> data={squares}
        </SelectButton>
        <ConfirmButton text="הוספה" width={112} />
      </form>
    </div>
  );
};

export default AppointmentForm;

