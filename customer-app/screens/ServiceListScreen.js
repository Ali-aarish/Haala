// ServiceListScreen — Demo
// Shows services filtered by a category (e.g. "Cleaning", "Repair").

import React, { useEffect, useState } from "react";
import { getServices } from "../services/apiClient";
import ServiceCard from "../components/ServiceCard";

export default function ServiceListScreen({ category, onOpen }) {
  const [services, setServices] = useState([]);

  // Load all services then keep only the ones in this category
  useEffect(() => {
    getServices().then((all) =>
      setServices(all.filter((s) => s.category === category))
    );
  }, [category]);

  return (
    <div>
      <h2>{category} services</h2>
      {services.map((s) => (
        <ServiceCard key={s.id} service={s} onOpen={onOpen} />
      ))}
    </div>
  );
}
