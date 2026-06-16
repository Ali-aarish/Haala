// Booking model — Demo
// Example shape of a booking.

const BookingSchema = {
  id: "Number — unique id",
  serviceId: "Number — booked service",
  customerId: "Number — customer who booked",
  date: "String — scheduled date",
  status: "String — requested / confirmed / in_progress / completed",
};

module.exports = BookingSchema;
