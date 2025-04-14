# FinDashboard - backend

# Features
1. REST API endpoints for dashboard and settings
2. CORS-enabled for frontend integration
3. Lightweight JSON-based mock database
4. Simple Express.js server
5. .env support for port configuration

# Folder Structure

backend/
│
├── data/
│   ├── cards.json
│   ├── transactions.json
│   ├── contacts.json
│   ├── balance-history.json
│   └── settings.json
│
├── routes/
│   └── dashboard.js
│
├── .env
├── server.js
├── package.json
└── README.md

# API Endpoints
GET	/dashboard/cards	Returns list of cards
GET	/dashboard/transactions	Returns list of transactions
GET	/dashboard/contacts	Returns contacts list
GET	/dashboard/balance-history	Returns balance history data


# Settings Route

GET	/settings	Returns user profile data

# Setup Instructions
1. Clone the Repository

git clone https://github.com/your-username/soar-finance-backend.git
cd soar-finance-backend

# Install Dependencies


1. npm install
2. Create .env File
PORT=1400

# Run the Server


npm run dev
By default, the server will run on http://localhost:1400

# CORS Integration
The server is CORS-enabled to allow frontend clients (like React apps) to securely fetch data from this backend during development.

# Notes
This backend is for frontend testing/demo purposes only.

No database or authentication is used.

The frontend fetches data from VITE_API_BASE_URL, which should be set to  deployed backend URL and in this case it is : https://findashboard-k9ob.onrender.com