// Dashboard — Demo
// High-level marketplace stats: total users, services and bookings.

import React, { useEffect, useState } from "react";
import { getUsers, getServices, getBookings } from "../services/apiClient";
import Chart from "../components/Chart";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);

  // Fetch each collection once on mount
  useEffect(() => {
    getUsers().then(setUsers);
    getServices().then(setServices);
    getBookings().then(setBookings);
  }, []);

  // Feed the counts into the demo bar chart
  const chartData = [
    { label: "Users", value: users.length },
    { label: "Services", value: services.length },
    { label: "Bookings", value: bookings.length },
  ];

  return (
    <div>
      <h1>Dashboard 📊</h1>
      <div className="stats">
        <div className="stat-card">
          <h3>Users</h3>
          <p>{users.length}</p>
        </div>
        <div className="stat-card">
          <h3>Services</h3>
          <p>{services.length}</p>
        </div>
        <div className="stat-card">
          <h3>Bookings</h3>
          <p>{bookings.length}</p>
        </div>
      </div>
      <Chart data={chartData} />
    </div>
  );
}
