// Notification controller — Demo (in-memory sample reminders)

let notifications = [
  { id: 1, userId: 1, message: "Reminder: Home Cleaning booked for tomorrow", type: "reminder", read: false },
  { id: 2, userId: 1, message: "Your payment of 150 SAR was successful", type: "payment", read: true },
  { id: 3, userId: 2, message: "New booking request for AC Repair", type: "booking", read: false },
];

// GET /api/notifications
exports.getNotifications = (req, res) => {
  res.json(notifications);
};
