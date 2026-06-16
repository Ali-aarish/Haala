// MyServicesScreen — Demo
// Lists the vendor's services and lets them add a new one.

import React, { useEffect, useState } from "react";
import { getServices } from "../services/apiClient";
import { addService } from "../services/serviceService";
import ServiceItem from "../components/ServiceItem";
import Button from "../components/Button";

export default function MyServicesScreen() {
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState("Home Cleaning");
  const [price, setPrice] = useState("150");
  const [category, setCategory] = useState("Cleaning");

  // Load services when the screen opens
  useEffect(() => {
    getServices().then(setServices);
  }, []);

  // Add a new service then refresh the list
  async function handleAdd() {
    await addService({ title, price: Number(price), vendorId: 1, category });
    getServices().then(setServices);
  }

  return (
    <div>
      <h2>My Services</h2>
      {services.map((s) => (
        <ServiceItem key={s.id} service={s} />
      ))}
      <h3>Add a service</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price (SAR)" />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <Button label="Add Service" onClick={handleAdd} />
    </div>
  );
}
