# Movie Search App

A responsive, single-page application (SPA) built with React and TypeScript that allows users to search for movies using The Movie Database (TMDB) API. 

## Features
- **Movie Name-based Search**: Quickly find movies using the TMDB Search API.
- **Pagination**: Browse seamlessly through hundreds of search result pages.
- **Sorting**: Order the current page of results by:
  - Release Date (Newest to Oldest)
  - Release Date (Oldest to Newest)
  - Rating (High to Low)
- **Filtering**: Filter the current page of results by a minimum rating (0 to 10).
- **Responsive UI**: A clean, mobile-friendly design built with Tailwind CSS.

## Tech Stack
- **Framework**: [React 18](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide-React](https://lucide.dev/)
- **Testing**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/)

## Getting Started

### Prerequisites
- Node.js installed on your machine.
- A free TMDB API Key. Get one [here](https://developer.themoviedb.org/docs/getting-started).

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd "Movie Search App"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory and add your API key:
   ```env
   VITE_TMDB_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser.

## Running Tests
This project includes unit tests to verify the core components. To run the tests:
```bash
npm run test
```

## Deployment
This app is ready to be deployed to [Netlify](https://www.netlify.com/):
1. Build the project for production:
   ```bash
   npm run build
   ```
2. Drag and drop the generated `dist` folder into the Netlify Dashboard, or link your GitHub repository to Netlify for continuous deployment.
