// Notification model — Demo
// Example shape of a notification / reminder.

const NotificationSchema = {
  id: "Number — unique id",
  userId: "Number — recipient",
  message: "String — reminder text",
  type: "String — reminder / booking / payment",
  read: "Boolean — has the user seen it",
};

module.exports = NotificationSchema;
