export const createData = (hour, location, numOfBookedAppointments) => {
  return {
    hour,
    location,
    numOfBookedAppointments,
    volunteers: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
};
