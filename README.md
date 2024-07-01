# Netflix-GPT

Netflix-GPT is a web application that mimics Netflix's interface and functionality with added AI-powered movie search and recommendation features using OpenAI's GPT API.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

### User Authentication
- **Login/Signup**: User registration and login forms with form validation.
- **User Session Management**: Maintains user sessions and redirects based on authentication status.
- **Profile Management**: Update profile picture and name.
- **Sign Out**: Allows users to sign out.

### Browsing and Movie Information
- **Main Movie Display**: Shows a main movie with a trailer playing in the background.
- **Movie Lists**: Display lists of movies (trending, upcoming, popular) fetched from the TMDB API.
- **Movie Suggestions**: Provides movie recommendations based on user preferences.

### GPT-Powered Search
- **Search Bar**: AI-powered search bar using OpenAI’s API for personalized movie suggestions.
- **Multi-language Support**: Supports multiple languages for a diverse user base.
- **Intelligent Caching**: Utilizes memoization to optimize API calls.

## Installation

### Clone the Repository
```bash
git clone https://github.com/Umangjais01/Netflix-GPT.git
cd Netflix-GPT
start the web app from App.js - npm start
