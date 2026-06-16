// Services — Demo
// Lists bookable services with price (SAR) and category.

import React, { useEffect, useState } from "react";
import { getServices } from "../services/apiClient";
import DataTable from "../components/DataTable";

const columns = [
  { key: "id", label: "ID" },
  { key: "title", label: "Service" },
  { key: "price", label: "Price (SAR)" },
  { key: "category", label: "Category" },
];

export default function Services() {
  const [services, setServices] = useState([]);

  // Load services such as "Home Cleaning", "AC Repair", "Plumbing"
  useEffect(() => {
    getServices().then(setServices);
  }, []);

  return (
    <div>
      <h1>Services 🛠️</h1>
      <DataTable columns={columns} rows={services} />
    </div>
  );
}
