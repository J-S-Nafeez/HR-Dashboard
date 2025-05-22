# 🧑‍💼 HR Dashboard (Advanced)

A responsive and feature-rich HR Performance Dashboard built using **Next.js App Router**, **Tailwind CSS**, and **JavaScript**. This project helps HR Managers manage employee performance, bookmarks, and gain insightful analytics.

## 🚀 Live Demo

> (Add your live demo link here)

---

## 📌 Features Implemented

### ✅ Dashboard Homepage (`/`)
- Fetches user data from [dummyjson.com](https://dummyjson.com/users?limit=20)
- Displays user cards with:
  - Full Name, Email, Age
  - Random Department (via `randomuser.me` + mock logic)
  - Performance rating (1–5 stars)
  - Buttons: `View`, `Bookmark`, `Promote`

### ✅ Search & Filter
- Search bar filters users by name, email, or department (case-insensitive)
- Multi-select filter dropdown:
  - By department
  - By performance rating

### ✅ Dynamic User Details Page (`/employee/[id]`)
- Detailed user profile with:
  - Address, Phone, Bio (mock)
  - Performance history (mocked list)
- Performance rating stars and badges
- Tabbed UI:
  - `Overview`, `Projects`, `Feedback`
  - Dynamic content loading per tab

### ✅ Bookmark Manager (`/bookmarks`)
- Lists bookmarked employees
- Options to:
  - Remove bookmark
  - Trigger UI actions like `Promote` or `Assign to Project`

### ✅ Analytics Page (`/analytics`)
- Department-wise average ratings
- Bookmark trends (mocked)
- Chart.js or similar charting library used

---

## 🧱 Tech Stack

| Tech                  | Purpose                         |
|-----------------------|---------------------------------|
| **Next.js**           | App Router, Routing, SSR/SSG    |
| **Tailwind CSS**      | Utility-first responsive styling|
| **JavaScript (ES6+)** | Core logic and interactivity    |
| **Context API / Zustand** | State Management             |
| **Chart.js** (optional) | Data visualization             |
| **NextAuth.js** (optional) | Authentication              |

---

## 🧠 Core Concepts Used

- Client-side and/or server-side data fetching
- Custom Hooks: `useBookmarks`, `useSearch`
- Reusable components: Card, Modal, Badge, Button
- Responsive Design (Mobile to Desktop)
- Tabbed UI with dynamic content
- Dark/Light mode using Tailwind classes
- Accessible and keyboard-friendly navigation

---

## 🗂 Folder Structure

```bash
/
├── app/
│   ├── page.tsx (Dashboard)
│   ├── bookmarks/
│   ├── analytics/
│   └── employee/[id]/
├── components/
│   ├── Card.js
│   ├── Tabs.js
│   ├── SearchBar.js
│   └── Modal.js
├── hooks/
│   ├── useBookmarks.js
│   └── useSearch.js
├── lib/
├── public/
│   └── screenshots/
│       ├── BarChart.png
│       ├── Employee_Details.png
│       ├── graph.png
│       ├── Homepage.png
│       └── Search&Filter.png
└── styles/
📷 Screenshots
Homepage

Employee Details Page

Search & Filter

Analytics - Bar Chart

Analytics - Graph

📥 How to Run the Project
Clone the repository

git clone https://github.com/J-S-Nafeez/HR-Dashboard.git
cd hr-dashboard
Install dependencies

npm install
Run the development server

npm run dev
Open your browser and navigate to http://localhost:3000

📌 Author
Shaik Nafeez
LinkedIn : www.linkedin.com/in/jammalamadugu-shaik-nafeez | GitHub : https://github.com/J-S-Nafeez?tab=repositories

⭐️ If you like this project, please give it a ⭐ on GitHub!

