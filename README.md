# 📦 Subscription API – Node.js & Express

A backend project that implements a **subscription-based model** using **Node.js** and **Express.js**. This RESTful API supports user registration, authentication, subscription plan management, and payment handling logic (can be extended with Stripe, Razorpay, etc.).

---

## 🚀 Features

- 🧾 User Registration & Login (JWT Auth)
- 📬 Subscription Plans (Basic, Pro, Premium)
- 💳 Subscribe / Unsubscribe / Upgrade
- 🕒 Subscription Expiry & Renewal Logic
- 🛡️ Protected Routes for Subscribers
- 🧠 Built with clean MVC architecture

---

## 📁 Project Structure

subscription-api/
├── controllers/
│ └── authController.js
│ └── subscriptionController.js
├── models/
│ └── User.js
│ └── Subscription.js
├── routes/
│ └── authRoutes.js
│ └── subscriptionRoutes.js
├── middleware/
│ └── authMiddleware.js
├── config/
│ └── db.js
├── .env
├── server.js
└── package.json

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT for Authentication**
- **Dotenv**
- *(Optional: Stripe or Razorpay for payments)*

---

## 🔧 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/subscription-api.git
   cd subscription-api