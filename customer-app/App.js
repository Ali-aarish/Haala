// App — Demo entry point
// State-based screen switching (no router) for the Haala customer app.

import React, { useState } from "react";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import ProfileScreen from "./screens/ProfileScreen";

// Map of screen keys → components. Bookings reuses Home for the demo.
const screens = {
  Home: HomeScreen,
  Bookings: HomeScreen,
  Notifications: NotificationsScreen,
  Profile: ProfileScreen,
};

export default function App() {
  const [current, setCurrent] = useState("Home");

  // Pick the component for the active screen
  const Screen = screens[current];

  return (
    <div>
      <Header title="Haala 🛠️" />
      <nav style={{ padding: "8px" }}>
        {Object.keys(screens).map((name) => (
          <button key={name} onClick={() => setCurrent(name)}>
            {name}
          </button>
        ))}
      </nav>
      <Screen />
    </div>
  );
}
