# Movie Explorer

A modern, responsive web application for exploring movies using The Movie Database (TMDB) API. Built with React and Vite, this application provides a seamless experience for browsing and discovering movies.

## Features

- 🎬 Browse trending and popular movies
- 🔍 Detailed movie information including:
  - Movie posters and backdrop images
  - Release dates and runtime
  - Genre information
  - User ratings
  - Movie overviews and taglines
- 🎨 Modern and responsive UI design
- ⚡ Fast loading with loading animations
- 🔄 Real-time data fetching from TMDB API

## Tech Stack

- React.js
- Vite
- React Router DOM
- Tailwind CSS
- React Icons
- Framer Motion
- React Use

## Prerequisites

Before you begin, ensure you have:
- Node.js installed (v14 or higher)
- A TMDB API key (get it from [TMDB](https://www.themoviedb.org/documentation/api))
- Git installed on your system

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd movie-explorer
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your TMDB API key:
```env
VITE_TMDB_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## Deployment to GitHub Pages

1. First, add the `homepage` field to your `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/movie-explorer"
}
```

2. Install the `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

3. Add these scripts to your `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy your application:
```bash
npm run deploy
```

5. Go to your GitHub repository settings:
   - Navigate to "Settings" > "Pages"
   - Under "Source", select the `gh-pages` branch
   - Your site will be published at `https://yourusername.github.io/movie-explorer`

## Usage

1. The application will open in your default browser at `http://localhost:5173`
2. Browse through the movie listings
3. Click on any movie to view detailed information
4. Use the back button to return to the main listing

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
