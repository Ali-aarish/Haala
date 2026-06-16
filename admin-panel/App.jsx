// App — Demo entry point
// Sidebar layout that swaps the active page, with a top navbar.

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Vendors from "./pages/Vendors";
import Services from "./pages/Services";
import Bookings from "./pages/Bookings";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";

// Map page name → component
const pages = {
  Dashboard,
  Users,
  Vendors,
  Services,
  Bookings,
  Payments,
  Reports,
};

export default function App() {
  const [page, setPage] = useState("Dashboard");
  const Page = pages[page];

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar onNavigate={setPage} />
        <main style={{ flex: 1, padding: 16 }}>
          <h1>Haala Admin 🖥️</h1>
          <Page />
        </main>
      </div>
    </div>
  );
}
