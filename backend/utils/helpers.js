// Helpers — Demo
// Small utility functions used across the backend.

// Sum up line items into a total (in SAR)
function calcTotal(items = []) {
  return items.reduce((sum, item) => sum + (item.price || 0) * (item.qty || 1), 0);
}

// Format a date as a simple readable string
function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB");
}

// Generate the next id for an in-memory list
function nextId(list = []) {
  return list.length ? Math.max(...list.map((x) => x.id)) + 1 : 1;
}

module.exports = { calcTotal, formatDate, nextId };
