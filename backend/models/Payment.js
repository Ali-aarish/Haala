// Payment model — Demo
// Example shape of a payment.

const PaymentSchema = {
  id: "Number — unique id",
  bookingId: "Number — booking being paid for",
  amount: "Number — amount in SAR",
  method: "String — mada / card / cash / applepay",
  status: "String — paid / pending",
};

module.exports = PaymentSchema;
