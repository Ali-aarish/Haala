// App — Demo entry point
// State-based screen switching (no router) for the Haala vendor app.

import React, { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import DashboardScreen from "./screens/DashboardScreen";
import MyServicesScreen from "./screens/MyServicesScreen";
import BookingRequestsScreen from "./screens/BookingRequestsScreen";
import EarningsScreen from "./screens/EarningsScreen";
import ProfileScreen from "./screens/ProfileScreen";

// Map of screen keys → components
const screens = {
  Dashboard: DashboardScreen,
  MyServices: MyServicesScreen,
  Requests: BookingRequestsScreen,
  Earnings: EarningsScreen,
  Profile: ProfileScreen,
};

export default function App() {
  const [current, setCurrent] = useState("Dashboard");

  // Pick the component for the current screen
  const Screen = screens[current];

  return (
    <div>
      <Header title="Haala Vendor 🧰" />
      <nav>
        {/* One nav button per screen */}
        {Object.keys(screens).map((key) => (
          <Button key={key} label={key} onClick={() => setCurrent(key)} />
        ))}
      </nav>
      <Screen />
    </div>
  );
}
