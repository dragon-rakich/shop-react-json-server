# 🛍️ Shop React JSON Server

*Created as part of the **[Coders Lab JavaScript Boitcamp]** final project.*

A simple **tech e-commerce shop** built with **React**, **Parcel**, and **Sass**, using **JSON Server** as a mock backend API.  
This project was created to demonstrate front-end development, API integration, responsive design, and UI interactivity skills.

---

## 🚀 Overview

This app is a mini e-commerce platform that displays a catalog of **60 tech products**, organized into pages using **pagination**  
(12 products per page, up to 5 pages total).

Users can browse, search, filter, **sort**, and **add products to a cart** — all powered by React and data served from a fake REST API created with **JSON Server**.

It highlights practical use of:

- **React 19** for dynamic UI and component structure  
- **Sass** for modular and global styling  
- **Parcel** as a fast, zero-config bundler (an alternative to Create React App)  
- **JSON Server** to simulate backend CRUD operations  
- **Pagination, filtering, sorting, and cart management** for improved UX and data handling  
- **Responsive design** — mobile-first layout with breakpoints for tablet portrait, tablet landscape, desktop, and large desktop displays

---

## 🧩 Features

- Fetches and displays product data from a mock API (`db.json`)
- **Pagination**: 12 products per page (60 total)
- **Filtering and sorting options:**
  - Search bar (filter by product name or keyword)
  - Three dropdown menus for category-based filtering
  - One of the dropdowns provides **sorting options**:
    - A–Z (alphabetical ascending)
    - Z–A (alphabetical descending)
    - Highest → lowest price
    - Lowest → highest price
    - Highest → lowest rating
  - One checkbox filter (filters products by those who are "In Stock Only")
  - “Reset Filters” button to clear all filters
- **Cart system:**
  - Users can **add products to the cart**
  - The cart data is **persisted in `db.json`** via JSON Server
  - Separate **CartPanel component** displays added items and totals
- **Responsive design**:
  - Built **mobile-first**
  - Custom styles for **tablet portrait**, **tablet landscape**, **desktop**, and **large desktop**
  - **Responsive typography** for better readability across devices
- Component-based structure with modular Sass styles
- Lightweight setup using Parcel (no CRA)
- Demonstrates API data fetching, state management, and dynamic rendering with React

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React 19, React DOM |
| Styling | Sass |
| Build Tool | Parcel |
| Mock API | JSON Server |
| Language | JavaScript (no TypeScript) |

---

## ⚙️ Installation and Setup

Make sure you have **Node.js** and **npm** installed.

### 1. Clone the repository
    git clone https://github.com/dragon-rakich/shop-react-json-server.git
    cd shop-react-json-server

### 2. Install dependencies
    npm install

### 3. Start the mock server
    json-server --watch src/db.json
> Starts a fake REST API at `http://localhost:3000`.

### 4. Start the React app
    npm start
Parcel will automatically open the app in your browser (usually at `http://localhost:1234`).

---

## 📂 Project Structure

    shop-react-json-server/
    │
    ├── src/
    │   ├── assets/            # Product stock images, icons
    │   ├── Components/        # Reusable UI components (Header, Store, Product, Filters, etc.)
    │   ├── styles/            # Global and component-level Sass styles
    │   ├── db.json            # Mock API data (60 products)
    │   ├── index.html         # Entry point
    │   ├── index.js          # React root
    │   └── App.js             # Main App component
    │
    ├── package.json
    ├── .gitignore
    └── README.md

---

## 💡 Notes

- Based on [Parcel’s React recipe](https://parceljs.org/recipes/react/#getting-started) — a lightweight alternative to Create React App.  
- TypeScript was intentionally removed to keep the setup simple and focus on React fundamentals.  
- JSON Server is used locally to simulate a backend, storing both **product** and **cart** data.  
- Styles are built with **Sass**, using a **mobile-first approach** and modular partials for scalability.

---

## 🧭 Future Improvements

- Add routing with React Router  
- Expand sorting and filtering capabilities  
- Improve accessibility and ARIA labeling  
- Deploy to Netlify or Vercel

---


## 📜 License

This project is open for educational and portfolio purposes.  
Feel free to explore or adapt it for your own learning.
