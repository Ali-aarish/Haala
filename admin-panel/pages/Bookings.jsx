// Bookings — Demo
// Lists customer bookings and their current status.

import React, { useEffect, useState } from "react";
import { getBookings } from "../services/apiClient";
import DataTable from "../components/DataTable";

const columns = [
  { key: "id", label: "ID" },
  { key: "customer", label: "Customer" },
  { key: "service", label: "Service" },
  { key: "status", label: "Status" },
];

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  // Fetch bookings on mount (status e.g. pending / confirmed / completed)
  useEffect(() => {
    getBookings().then(setBookings);
  }, []);

  return (
    <div>
      <h1>Bookings 📅</h1>
      <DataTable columns={columns} rows={bookings} />
    </div>
  );
}
