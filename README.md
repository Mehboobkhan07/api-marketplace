#### Api-Marketplace
## 🚀 Features

### 🧑 User Authentication & Roles
- JWT-based registration and login
- Role-based access: `User`, `Developer`, `Admin`

### 🔌 API Publishing (For Developers)
- Developers can register new APIs
- Each API has a public URL, description, and owner

### 📬 API Subscription (For Users)
- Users can subscribe to APIs and receive unique API keys
- Secure API key validation using headers
- Daily rate-limiting middleware per key

### 🛡 Security Features
- JWT token validation
- Role-based route protection
- Unique API key per user per API
- Rate limiting logic with counters

### 📊 Admin Dashboard (Backend)
- View all users, APIs, and subscriptions
- Delete users or APIs
- Role-protected admin-only routes

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Security**: JWT, UUID, Custom Middleware
- **Tools**: Postman for API Testing


