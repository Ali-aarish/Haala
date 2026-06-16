// sendNotification — Demo
// In a real app this would push SMS / FCM. Here it just logs.

function sendNotification(userId, message) {
  console.log(`🔔 Notification → user ${userId}: ${message}`);
  return { delivered: true, userId, message };
}

module.exports = sendNotification;
