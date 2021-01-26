import { SelectButton } from '../../buttons';
import { useState } from 'react';

import './BookedAppointments.css';
const hospitalName = [
  'איכילוב',
  'תל השומר',
  'בילינסון',
  'הדסה',
  'רמב״ם',
  'סורוקה',
];
const BookedAppointments = () => {
  const [hospital, setHospital] = useState('');
  return (
    <div className="selectButtonContainer">
      <SelectButton
        header={'בית חולים'}
        content={hospitalName}
        setData={setHospital}
        data={hospital}
      />
    </div>
  );
};

export default BookedAppointments;
