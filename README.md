# Futurrizon

![Futurrizon Hero](frontend/src/assets/logo.png) <!-- Update later with a real hero screenshot if available -->

Futurrizon is a modern, high-performance corporate website designed to showcase services, culture, and expertise in Microsoft ecosystem technologies (SharePoint, M365, Power Platform, Azure, and AI integrations). 

Built with a premium UI/UX focus, it features dynamic animations, responsive design, and an integrated Admin Dashboard for managing content seamlessly.

---

## ⚡ Tech Stack

**Frontend:**
- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** React Router DOM (v7)

**Backend:**
- **Framework:** [Django](https://www.djangoproject.com/) (Python)
- **Database:** SQLite (default)
- **Architecture:** RESTful API delivering content to the React frontend

---

## ✨ Key Features

- **Premium UI/UX:** Glassmorphism, smooth scroll, interactive hover states, and dynamic gradient effects.
- **Dynamic Content Management:** 
  - Admin Panel for managing **Blogs**, **Job Postings**, and **Team Members**.
  - Integrated leads management and newsletter subscriptions.
- **Interactive Pages:**
  - **Services:** Detailed breakdown of M365, SharePoint, and Power Platform offerings.
  - **Life at Futurrizon:** Swipeable photo galleries, culture pillars, and video hero sections.
  - **Career Page:** Open roles dynamic listing with detailed requirements.
  - **AI Chatbot:** Built-in "FuriChat" integration for automated visitor assistance.
- **Performance Optimized:** Fast load times powered by Vite and optimized asset delivery.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Python](https://www.python.org/) (v3.10+ recommended)
- npm or yarn

### 1. Clone the repository
```bash
git clone <repository-url>
cd Futurrizon
```

### 2. Setup the Backend (Django)
```bash
cd backend
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies 
# (Assuming a requirements.txt exists; if not, `pip install django djangorestframework django-cors-headers pillow`)
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create a superuser for the Admin Panel
python manage.py createsuperuser

# Start the Django server (runs on port 8000)
python manage.py runserver
```

### 3. Setup the Frontend (React + Vite)
Open a new terminal window.
```bash
cd frontend

# Install dependencies
npm install

# Start the Vite development server (runs on port 5173 natively)
npm run dev
```

---

## 📂 Project Structure

```text
Futurrizon/
├── backend/                  # Django Backend API
│   ├── config/               # Main Django settings & routing
│   ├── core/                 # Core app (Models: Blog, Job, Team, Leads, etc.)
│   ├── media/                # Uploaded images (blogs, team photos)
│   ├── db.sqlite3            # Database
│   └── manage.py             # Django CLI
│
└── frontend/                 # React Frontend
    ├── public/               # Static public assets
    ├── src/
    │   ├── assets/           # Images, SVGs, Videos
    │   ├── components/       # Reusable UI components & Admin Dashboard
    │   ├── data/             # Static JSON/JS data (e.g., FuriChat logic)
    │   ├── pages/            # Main route pages (Home, Services, Life, etc.)
    │   ├── App.jsx           # Main Application Router
    │   ├── index.css         # Tailwind directives & global styles
    │   └── main.jsx          # React DOM mounting point
    ├── package.json          # Frontend dependencies
    └── vite.config.js        # Vite bundler configuration
```

---

## 🛠️ Admin Dashboard
To manage content dynamically:
1. Ensure the Django backend is running.
2. Navigate to the frontend Admin login route (usually `/admin/login`).
3. Log in using the superuser credentials created during backend setup.
4. From the dashboard, you can add/edit/delete Blogs, Jobs, and Team Members. Real-time updates reflect instantly on the public-facing pages.

---

## 📝 License
Proprietary software. All rights reserved by Futurrizon.
