# BakeryHUB Auth Service

A backend authentication service for the BakeryHUB ecosystem. This service handles user management, role assignments, and outlet associations using Node.js, Express, and PostgreSQL.

## 📄 Description

The **BakeryHUB Auth Service** provides the foundational backend infrastructure for managing secure access to the BakeryHUB platform. It connects to a PostgreSQL database to manage users, roles, and bakery outlets.

The project is built as an **ES Module** and utilizes **Prisma ORM** for efficient database interactions.

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Authentication & Security:**
    * `jsonwebtoken` (JWT)
    * `bcryptjs` (Password Hashing)
    * `@clerk/express` (Authentication Middleware)
    * `helmet` (Security Headers)
    * `cors` (Cross-Origin Resource Sharing)

## 📂 Database Schema

The service manages the following core data models (defined in `prisma/schema.prisma`):

* **User:** Stores user details (Name, Email, Password, Contact) and links to Roles and Outlets.
* **Role:** Defines user permissions (eqp. `role_id`, `role_name`, `description`).
* **Outlet:** Represents physical bakery locations linked to users.

## 🚀 Getting Started

### Prerequisites

* **Node.js** (v18+ recommended)
* **PostgreSQL** installed and running locally or on a cloud provider (e.g., AWS RDS).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/bakeryhub-auth-service.git](https://github.com/your-username/bakeryhub-auth-service.git)
    cd bakeryhub-auth-service
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Configuration:**
    Create a `.env` fileQm in the root directory. You will need to define your environment variables, particularly for the database connection.
    
    Example `.env`:
    ```env
    PORT=3000
    DATABASE_URL="postgresql://user:password@localhost:5432/bakeryHUB-Auth"
    JWT_SECRET="your_super_secret_key"
    ```

4.  **Database Setup:**
    Run Prisma migrations to create the tables in your PostgreSQL database:
    ```bash
    npx prisma migrate dev --name init
    ```
    *(Or generate the client if the DB is already set up)*
    ```bash
    npx prisma generate
    ```

### Running the Application

* **Development Mode:**
    Starts the server with `nodemon` for hot-reloading.
    ```bash
    npm run dev
    ```

* **Production Mode:**
    To start the server using node directly:
    ```bash
    node src/server.js
    ```

The server usually starts on **http://localhost:3000** (or the port specifiedrn in your `.env`).

## wbrAPI Endpoints

### General
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Welcome message |
| `GET` | `/auth` | Test database connection |

*(Note: Additional authentication routes implementation would typically be found in routes folder)*

## 🤝 Contributing

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/NewFeature`).
3.  Commit your changes (`git commit -m 'Add some NewFeature'`).
4.  Push to the branch (`git push origin feature/NewFeature`).
5.  Open a Pull Request.

## 📜 License

This project is licensed under the **ISC License**.