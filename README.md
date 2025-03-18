# Login App with Next.js and External API Authentication

This project is a simple login application built with Next.js that authenticates users against an external API. It demonstrates how to handle user login, manage authentication tokens, and interact with a remote server.

## Features

-   **User Login:** Allows users to log in using their email and password.
-   **External API Integration:** Communicates with the `https://dia-backend.numbersprotocol.io/api/v3/auth/token/login/` API for user authentication.
-   **Token Management:** Stores the authentication token in an HTTP-only cookie for secure session management.
-   **Error Handling:** Gracefully handles login failures and displays error messages to the user.
-   **Loading State:** Provides visual feedback to the user during the login process.
- **Responsive UI:** Basic styling for a clean and user-friendly login form.
- **Next.js App Router:** Uses the latest Next.js App Router for routing and data fetching.

## Technologies Used

-   **Next.js:** A React framework for building server-rendered and static web applications.
-   **TypeScript:** A statically typed superset of JavaScript.
-   **React:** A JavaScript library for building user interfaces.
-   **Tailwind CSS:** A utility-first CSS framework for rapid UI development (implied by the class names in `LoginForm.tsx`).
-   **Fetch API:** For making HTTP requests to the external API.
-   **HTTP-only Cookies:** For secure storage of the authentication token.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd login-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

4.  **Open your browser:**

    Open http://localhost:3000 to view the application. You can navigate to the login page at http://localhost:3000/login.

## Project Structure

-   `app/`: Contains the Next.js application code.
    -   `api/`: API routes.
        -   `auth/route.ts`: Handles the login API request, communicates with the external API, and sets the authentication cookie.
    -   `login/`: Login page.
        -   `page.tsx`: The main login page component.
        - `components/`:
            - `LoginForm.tsx`: The login form component.
    - `page.tsx`: The default home page.
-   `public/`: Static assets.
-   `README.md`: This file.
- `package.json`: Project dependencies and scripts.

## Key Files

-   **`app/api/auth/route.ts`:**
    -   Handles the POST request to the `/api/auth` endpoint.
    -   Fetches the login token from the external API.
    -   Sets the `auth_token` cookie.
    -   Handles errors and returns appropriate responses.
-   **`app/login/page.tsx`:**
    -   Renders the `LoginForm` component.
-   **`app/login/components/LoginForm.tsx`:**
    -   Implements the login form UI.
    -   Manages form state (email, password, error, loading).
    -   Sends the login request to the `/api/auth` endpoint.
    -   Handles the response and displays errors.

## Learn More

-   Next.js Documentation - Learn about Next.js features and API.
-   Learn Next.js - An interactive Next.js tutorial.
-   Next.js GitHub repository - Your feedback and contributions are welcome!
- Tailwind CSS - Learn more about Tailwind CSS.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.
