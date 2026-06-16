// Reports — Demo
// Simple computed marketplace stats with a demo bar chart.

import React, { useEffect, useState } from "react";
import { getBookings, getPayments } from "../services/apiClient";
import Chart from "../components/Chart";

export default function Reports() {
  const [bookings, setBookings] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    getBookings().then(setBookings);
    getPayments().then(setPayments);
  }, []);

  // Demo computed numbers
  const completed = bookings.filter((b) => b.status === "completed").length;
  const revenue = payments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);

  const chartData = [
    { label: "Bookings", value: bookings.length },
    { label: "Completed", value: completed },
    { label: "Payments", value: payments.length },
  ];

  return (
    <div>
      <h1>Reports 📈</h1>
      <div className="stats">
        <div className="stat-card">
          <h3>Total Bookings</h3>
          <p>{bookings.length}</p>
        </div>
        <div className="stat-card">
          <h3>Completed</h3>
          <p>{completed}</p>
        </div>
        <div className="stat-card">
          <h3>Revenue (SAR)</h3>
          <p>{revenue}</p>
        </div>
      </div>
      <Chart data={chartData} />
    </div>
  );
}
