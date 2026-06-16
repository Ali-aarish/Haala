// Vendor model — Demo
// Example shape of a service provider (vendor).

const VendorSchema = {
  id: "Number — unique id",
  name: "String — provider/business name",
  category: "String — e.g. Cleaning, AC, Plumbing",
  rating: "Number — average rating 0-5",
  city: "String — service area",
  verified: "Boolean — passed onboarding checks",
};

module.exports = VendorSchema;
