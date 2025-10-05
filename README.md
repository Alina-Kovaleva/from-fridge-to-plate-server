# Requirements

- Node.js 22.20.0 (LTS) and npm 10+
- PostgreSQL
- A `.env` file that defines `DATABASE_URL`, `JWT_SECRET`, and any optional pool settings

# Getting Started

1. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

2. Configure the database connection in `.env`:

   - **Local Postgres** – see the quickstart below. Use a URL such as `postgres://user:password@localhost:5432/database` and set `PGSSLMODE=disable`.
   - **Hosted Postgres** – paste the provider's connection string. For Neon include `?sslmode=require` and keep `PGSSLMODE=require`.

3. Install dependencies:

   ```bash
   npm install
   ```

4. Apply the schema and optional seed data:

   ```bash
   npm run migrate
   npm run seed
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

   The API listens on `http://localhost:4000` by default. Override via the `PORT` variable.

# Local Database Quickstart

If you prefer to run PostgreSQL locally instead of using a hosted provider:

1. Install PostgreSQL (for example `brew install postgresql@15`, `sudo apt install postgresql`, or launch the official Docker image).
2. Create a development database and user that match the credentials in `.env`:

   ```bash
   createdb fridge_dev
   createuser fridge_user --pwprompt
   ```

3. Update `.env`:

   ```env
   DATABASE_URL=postgres://fridge_user:<password>@localhost:5432/fridge_dev
   PGSSLMODE=disable
   ```

4. Run migrations and seeds as shown above.

When you switch back to a managed service like Neon, restore the hosted connection string and set `PGSSLMODE=require` so TLS stays enabled.

# Wireframes

![Wireframes](pictures/Pages.png)

# Database Tables

![Database Tables](pictures/From_fridge_to_plate_DB.png)

# Stack

- Languages: Javascript
- Frontend Libraries: React, Redux, Axios
- Backend: Express & Sequelize
- Database: Postgres (Neon recommended for production)
