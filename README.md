# Aseds Store E-commerce Platform

A full-stack e-commerce platform built with Next.js, Prisma, Tailwind CSS, and NextAuth.js.

## Features

- User authentication (sign-in, sign-up)
- Product listings with search and filtering
- Shopping cart functionality
- Order placement and management
- Payment processing integration
- User profile management
- Admin panel for managing products and orders
- Responsive design for various screen sizes

## Technologies Used

- Next.js
- Prisma
- PostgreSQL
- NextAuth.js
- Tailwind CSS
- TypeScript
- React Hook Form
- Zod
- Shadcn UI
- Lucide React icons

## Getting Started

### Prerequisites

* Node.js (version 20 or higher)
* npm (or yarn/pnpm)
* PostgreSQL

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AbdoAnss/next-prisma-store.git
    cd next-prisma-store
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    *   Copy the `.env-example` file to a new file named `.env`:
        ```bash
        cp .env-example .env
        ```
    *   Open the `.env` file and update the `DATABASE_URL` with your PostgreSQL connection string. Example:
        ```
        DATABASE_URL="postgresql://user:password@host:port/database_name"
        ```
    *   Update other environment variables as needed (e.g., for NextAuth.js).
4.  **Run database migrations:**
    ```bash
    npx prisma migrate dev
    ```
5.  **Seed the database (optional):**
    The project includes a seed script to populate the database with sample data.
    ```bash
    npx prisma db seed
    ```
6.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application should now be running at `http://localhost:3000`.

## Available Scripts

*   `npm run dev`: Starts the development server with Turbopack.
*   `npm run build`: Builds the application for production.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Lints the codebase using Next.js ESLint configuration.
*   `npm run postinstall`: (This script runs automatically after `npm install`) Generates Prisma Client.

## Database Schema

This project uses Prisma as its ORM, and the schema is defined in `prisma/schema.prisma`. The main models are:

*   `Product`: Stores information about products available in the store (name, description, price, images, stock, etc.).
*   `User`: Stores user information, including authentication details (name, email, password, role, etc.).
*   `Account`: Stores provider account information linked to a user, used by NextAuth.js for OAuth.
*   `Session`: Stores user session information, managed by NextAuth.js.
*   `Cart`: Represents a user's shopping cart, storing items added by the user.
*   `Order`: Stores details of a customer's order, including shipping information and payment status.
*   `OrderItem`: Represents individual items within an order, linking products to orders with quantity and price at the time of purchase.
*   `Review`: Stores customer reviews and ratings for products.

## Usage

[Instructions on how to use the application will be added here.]

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request. If you plan to make significant changes, please open an issue first to discuss the changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
