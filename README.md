# Futurrizon Technologies Website

Premium futuristic enterprise IT services website built with React + Vite (Frontend) and Django REST Framework (Backend).

## 🚀 Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

**Backend:**
- Django 6.0
- Django REST Framework
- SQLite (Development) / PostgreSQL (Production ready)

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16+)
- Python (v3.10+)

### 1. Backend Setup
```bash
# Navigate to backend
cd backend

# Create virtual environment (if not already created)
python -m venv venv
# Activate: venv\Scripts\activate (Windows) or source venv/bin/activate (Mac/Linux)

# Install dependencies
pip install django djangorestframework django-cors-headers

# Run migrations
python manage.py migrate

# Start server
python manage.py runserver
```
The API will be available at `http://127.0.0.1:8000/api/`.

### 2. Frontend Setup
```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```
The application will run at `http://localhost:5173`.

## 🌍 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder.
3. Set environment variable `VITE_API_URL` to your backend URL.

### Backend (AWS/DigitalOcean/Render)
1. Install `gunicorn` and `psycopg2-binary`.
2. Set `DEBUG = False` in `settings.py`.
3. Configure `ALLOWED_HOSTS`.
4. Use a production database like PostgreSQL.
5. Serve static files using generic storage or WhiteNoise.

## 📂 Project Structure
```
Futurrizon/
├── backend/            # Django Project
│   ├── config/         # Settings & URLs
│   ├── core/           # API Apps (Views, Models, Serializers)
│   └── manage.py
├── frontend/           # React Project
│   ├── src/
│   │   ├── components/ # UI Components
│   │   ├── App.jsx     # Main Component
│   │   └── main.jsx    # Entry Point
│   └── tailwind.config.js
└── README.md           # Documentation
```
