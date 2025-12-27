🏗️ A2 Construction – Django Web Application

A2 Construction is a modern construction company website developed using Python Django.
The project showcases company services, ongoing projects, contact management, and an admin dashboard to manage content efficiently.

📌 Project Overview

This web application is designed for a construction company to:

Showcase construction services

Display completed and ongoing projects

Collect customer enquiries

Manage content through Django Admin

Provide a professional online presence

🛠️ Technologies Used
Backend

Python 3

Django Framework

Frontend

HTML5

CSS3

JavaScript

Bootstrap

jQuery

Database

SQLite (Development)

Can be upgraded to PostgreSQL / MySQL

✨ Features

🏠 Home Page with company introduction

🏗️ Services Section (Construction, Renovation, Interior, etc.)

📸 Project Gallery

📞 Contact Form with database storage

🔐 Admin Login (Django Admin Panel)

📂 Dynamic content management

📱 Responsive UI using Bootstrap

🔒 Secure backend using Django authentication

📁 Project Structure
a2construction/
│
├── a2construction/        # Main project settings
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── construction/          # App for construction features
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
│
├── templates/             # HTML templates
│
├── static/                # CSS, JS, Images
│
├── db.sqlite3             # Database
├── manage.py
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/anjali-a550/a3construction.git
cd a3construction

2️⃣ Create Virtual Environment
python -m venv env
env\Scripts\activate

3️⃣ Install Dependencies
pip install django

4️⃣ Run Migrations
python manage.py makemigrations
python manage.py migrate

5️⃣ Create Superuser
python manage.py createsuperuser

6️⃣ Run Development Server
python manage.py runserver


Open browser:

http://127.0.0.1:8000/


Admin Panel:

http://127.0.0.1:8000/admin/

🧪 Testing

Form submission tested

Admin CRUD operations verified

Responsive layout tested on multiple screen sizes

🚀 Future Enhancements

🔐 User login & registration

📊 Project progress tracking

📧 Email notifications

💳 Online quotation system

☁️ AWS / Cloud deployment

🤖 AI-based cost estimation
