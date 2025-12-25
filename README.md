Overview

This project is a simple React-based frontend that consumes article data from a Laravel backend API and displays both original and updated versions of articles.

The goal of this phase was to build a clean, responsive UI with basic functionality under limited time constraints.

Tech Stack

React (Vite)

Axios

CSS

Features Implemented

Fetch articles from backend API

Display article list

Show article version (original / updated)

Responsive and minimal UI

Partial Implementation Notes

No authentication

No pagination or filtering

Assumes backend API is already available

Focus was on clarity, simplicity, and clean data flow

API Dependency

The frontend expects a backend API running at:
GET http://localhost:8000/api/articles

Expected response format:
[
  {
    "id": 1,
    "title": "Sample Article",
    "content": "Article content...",
    "version": "original"
  }
]
Live Demo:
https://beyondchats-frontend-mu.vercel.app/
