// NotificationsScreen — Demo
// Lists notifications for the customer (booking updates, offers, etc.).

import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:5000/api";

export default function NotificationsScreen() {
  const [items, setItems] = useState([]);

  // GET /notifications when the screen opens
  useEffect(() => {
    fetch(`${BASE_URL}/notifications`)
      .then((res) => res.json())
      .then(setItems);
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      {items.map((n) => (
        <div key={n.id} style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
          {n.message}
        </div>
      ))}
    </div>
  );
}
