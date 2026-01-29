# Seshan Frontend Demo

A standalone, "boxed" demonstration of the refreshed Seshan User Experience.

## Overview

This project is a portable **Vite + React + TypeScript** application that showcases the new design specifications for the Seshan Personal Finance Dashboard. It runs completely independently from the main monorepo and uses mock data to simulate the experience.

### Key Features Demonstrated

1.  **Standard Layout Architecture**: A responsive 3-region layout (Sidebar, Header, Main Content) that solves the "disjointed pages" problem.
2.  **Progressive Disclosure**: The Holdings view uses an Accordion pattern to show high-level data first, allowing users to drill down without leaving the context.
3.  **Visual Consistency**: Enforced use of a limited Button hierarchy and standard Card components.
4.  **Premium Aesthetics**: Dark mode implementation with carefully selected financial colors.
5.  **Interactive Elements**:
    *   **Sidebar**: Collapsible with smooth transition.
    *   **Holdings**: Expandable rows with details.
    *   **Add Holding**: Modal with form and success Toast notification.

## Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm

### Installation

1.  Navigate to the directory:
    ```bash
    cd seshan-demo-frontend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser to `http://localhost:5173`.

## Project Structure

*   `src/components/layout`: Core shell components (Sidebar, Header).
*   `src/components/ui`: Reusable UI primitives (Button, Card, Accordion, etc).
*   `src/views`: Page-level components (Dashboard, Holdings).
*   `src/lib`: Design tokens and mock data.

## Note for Deployment

This project is designed to be "boxed". You can copy the entire `seshan-demo-frontend` folder to any other location or repository, run `npm install`, and it will work immediately. No backend connection is required.
