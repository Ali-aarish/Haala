// HomeScreen — Demo
// Fetches the list of services and lets the user open one to book it.

import React, { useEffect, useState } from "react";
import { getServices } from "../services/apiClient";
import ServiceCard from "../components/ServiceCard";
import BookingScreen from "./BookingScreen";

export default function HomeScreen() {
  const [services, setServices] = useState([]);
  const [selected, setSelected] = useState(null);

  // Load services when the screen opens
  useEffect(() => {
    getServices().then(setServices);
  }, []);

  // If a service is chosen, switch to the booking flow
  if (selected) {
    return <BookingScreen service={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div>
      <h2>Services near you</h2>
      {services.map((s) => (
        <ServiceCard key={s.id} service={s} onOpen={setSelected} />
      ))}
    </div>
  );
}
