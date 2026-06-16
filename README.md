# Haala 🛍️

**A Digital Marketplace Platform connecting customers with service providers.**

📍 Country: Saudi Arabia

---

## What is Haala?

Haala is an online marketplace where customers can find and book services,
and service providers (vendors) can offer and manage their services.
The platform handles bookings, payments, notifications, and day-to-day
operations through three connected applications.

## The Three Apps

| App | Who uses it | What they do |
|-----|-------------|--------------|
| **Customer App** | Customers | Browse services, make bookings, pay, get notifications |
| **Vendor App** | Service providers | List services, accept bookings, manage their business |
| **Admin Panel** | Platform team | Oversee users, services, payments, and operations |

All three apps talk to a single **Backend** that stores the data and runs
the business logic.

## Main Features

- 📅 **Bookings** — Customers request and schedule services
- 💳 **Payments** — Secure payment handling
- 🧰 **Service Management** — Vendors create and update their offerings
- 🔔 **Notifications** — Updates for bookings, payments, and messages
- ⚙️ **Operational Workflows** — Tools that keep the platform running smoothly

## Project Structure

```
Haala/
├── customer-app/    → App for customers
├── vendor-app/      → App for service providers
├── admin-panel/     → Dashboard for the platform team
├── backend/         → Server, database, and business logic
└── docs/            → Project documentation
```

## Tech (Suggested)

- **Mobile Apps** (Customer & Vendor): React Native / Flutter
- **Admin Panel**: React (web dashboard)
- **Backend**: Node.js + Express
- **Database**: MongoDB / PostgreSQL

