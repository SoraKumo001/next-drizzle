# next-drizzle

A modern web application built with Next.js, Drizzle ORM, and GraphQL. This project demonstrates a full-stack architecture using the latest technologies for efficient data management and rendering.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** TypeScript
*   **Database:** PostgreSQL
*   **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
*   **API:** GraphQL (Server: Hono + Pothos, Client: Urql)
*   **Styling:** Tailwind CSS
*   **Authentication:** Custom JWT-based auth
*   **Code Generation:** GraphQL Codegen

## Features

*   **Post Management:**
    *   View a list of posts (Home page).
    *   Create new posts with title, content, published status, and categories.
    *   Edit existing posts.
    *   Delete posts.
    *   Draft system (Published/Unpublished posts).
*   **User System:**
    *   User switching/authentication (simulated/simplified for demo).
    *   User roles.
*   **Category Management:**
    *   Categorize posts.

## Getting Started

### Prerequisites

*   Node.js (v18+)
*   pnpm (recommended) or npm/yarn
*   Docker (for the database)

### Installation & Setup

1.  **Install dependencies:**
    ```bash
    pnpm install
    ```

2.  **Start the database:**
    This project uses Docker Compose to run PostgreSQL.
    ```bash
    pnpm docker
    ```

3.  **Setup Database (Migrate & Seed):**
    Initialize the database schema and load seed data.
    ```bash
    pnpm drizzle:reset
    ```
    This command runs migrations and seeds the database with initial data.

4.  **Start the development server:**
    ```bash
    pnpm dev
    ```

5.  **Access the application:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

*   `dev`: Starts the Next.js development server.
*   `docker`: Starts the PostgreSQL container.
*   `graphql:codegen`: Watches for GraphQL changes and generates TypeScript types.
*   `graphql:schema`: Exports the GraphQL schema.
*   `drizzle:generate`: Generates SQL migrations based on schema changes.
*   `drizzle:migrate`: Applies migrations to the database.
*   `drizzle:seed`: Seeds the database with test data.
*   `drizzle:reset`: Resets the database (Migrate + Seed).
*   `lint`: Runs ESLint.

## Project Structure

*   `app/`: Next.js App Router pages and components.
    *   `api/graphql/`: GraphQL API route handler.
    *   `components/`: Shared UI components (Header, etc.).
    *   `db/`: Drizzle schema and relations.
    *   `hooks/`: Custom React hooks (Auth, etc.).
*   `codegen/`: GraphQL Code Generator configuration and definitions.
*   `drizzle/`: Database migration files.
*   `tools/`: Utility scripts for seeding and schema management.
