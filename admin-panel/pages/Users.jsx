// Users — Demo
// Lists all marketplace customers in a table.

import React, { useEffect, useState } from "react";
import { getUsers } from "../services/apiClient";
import DataTable from "../components/DataTable";

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "phone", label: "Phone" },
  { key: "role", label: "Role" },
];

export default function Users() {
  const [users, setUsers] = useState([]);

  // Load users when the page opens
  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h1>Users 👥</h1>
      <DataTable columns={columns} rows={users} />
    </div>
  );
}
