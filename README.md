# Eigen Restaking API (Proxy)

This project is a Node.js backend API that simulates EigenLayer restaking data using real blockchain data pulled via The Graph (GraphQL) and stores it in MongoDB.

## 🧠 What It Does

* Fetches and syncs **real-time restaker-like data** (from subgraphs like Lido or other DeFi pools)
* Stores `restakers`, `validators`, and `rewards` into MongoDB
* Exposes REST API endpoints to query the synced data
* Uses a proxy data source that mimics EigenLayer's behavior

---

## 📦 Tech Stack

* **Node.js** + **Express**
* **MongoDB Atlas**
* **The Graph** (GraphQL subgraphs)
* **graphql-request**
* **Ethers.js** (optional for on-chain fallback)

---

## 🛠 Project Structure

```
src/
│
├── controllers/       # Handles API logic
├── models/            # Mongoose schemas for Restaker, Validator, Reward
├── routes/            # API route files
├── services/          # GraphQL fetchers and logic
├── config/            # Constants like RPC and Mongo URI
└── index.js           # Main server file
```

---

## 🔌 API Endpoints

| Method | Route               | Description                    |
| ------ | ------------------- | ------------------------------ |
| POST   | `/restakers/sync`   | Fetch and store restakers      |
| GET    | `/restakers`        | List all restakers             |
| POST   | `/validators/sync`  | Calculate and store validators |
| GET    | `/validators`       | List all validators            |
| GET    | `/rewards/:address` | User reward info               |
| POST   | `/sync-all`         | Sync everything in one go      |

---

## ⚙️ Setup

### 1. Clone and install

```bash
git clone https://github.com/R-V-Abhishek/eigen-restaking-api
cd eigen-restaking-api
npm install
```

### 2. Create `.env`

```env
MONGO_URI=your_mongodb_uri_here
```

### 3. Run the project

```bash
npm start
```

Server will run at `http://localhost:3000`.

---

## 📈 Data Source

We use a **public GraphQL subgraph** (e.g., Lido pools or Messari pool analytics) to simulate restaking behavior without requiring an EigenLayer-specific subgraph or wallet.

---

## ✅ Status

All core features implemented and working. Ready for demo, testing, and extension.

---

## 👨‍💼 Author

Made with ❤️ by \R V Abhishek
