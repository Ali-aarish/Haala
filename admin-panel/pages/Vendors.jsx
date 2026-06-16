// Vendors — Demo
// Lists service providers (vendors) registered on Haala.

import React, { useEffect, useState } from "react";
import { getVendors } from "../services/apiClient";
import DataTable from "../components/DataTable";

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Vendor" },
  { key: "category", label: "Category" },
  { key: "rating", label: "Rating" },
];

export default function Vendors() {
  const [vendors, setVendors] = useState([]);

  // Fetch vendors on mount
  useEffect(() => {
    getVendors().then(setVendors);
  }, []);

  return (
    <div>
      <h1>Vendors 🧰</h1>
      <DataTable columns={columns} rows={vendors} />
    </div>
  );
}
