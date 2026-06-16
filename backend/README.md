# Backend ⚙️

The **server** that powers all three apps. It stores the data and runs the
business logic. Every app (Customer, Vendor, Admin) talks to this backend.

## What the backend handles
- User accounts and login (customers, vendors, admins)
- Bookings
- Payments
- Service listings
- Notifications
- Operational workflows

## Folders
```
backend/
├── routes/       → The API endpoints (URLs the apps call)
├── controllers/  → Logic that runs for each request
├── models/       → Database structure (what data looks like)
├── middleware/   → Checks that run between request and response (e.g. auth)
├── config/       → Settings (database, keys, environment)
└── utils/        → Helper functions used in many places
```

## Suggested Tech
- Node.js + Express
- MongoDB / PostgreSQL
