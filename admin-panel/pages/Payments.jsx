// Payments — Demo
// Lists payment records with amount (SAR) and method.

import React, { useEffect, useState } from "react";
import { getPayments } from "../services/paymentService";
import DataTable from "../components/DataTable";

const columns = [
  { key: "id", label: "ID" },
  { key: "amount", label: "Amount (SAR)" },
  { key: "method", label: "Method" },
  { key: "status", label: "Status" },
];

export default function Payments() {
  const [payments, setPayments] = useState([]);

  // Fetch payments on mount (method e.g. mada / Apple Pay / Cash)
  useEffect(() => {
    getPayments().then(setPayments);
  }, []);

  return (
    <div>
      <h1>Payments 💳</h1>
      <DataTable columns={columns} rows={payments} />
    </div>
  );
}
