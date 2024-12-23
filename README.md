# CollabTool - Real-Time Document Collaboration App

## About

CollabTool is a web-based application designed for real-time document collaboration. It provides a basic front-end structure for user authentication and a user dashboard. This application allows users to register, log in, and access a dashboard for collaborative document work. It can be extended to include more functionalities for real-time document editing and sharing.

## Features

*   **User Registration:** New users can create accounts.
*   **User Login:** Existing users can securely log in.
*   **User Dashboard:** A basic dashboard accessible after successful login.
*   **Dynamic Navigation:** The navigation bar updates based on login status.
*   **Toast Notifications:** Clear feedback for user actions (success, error).
*   **Centralized API Handling:** Makes API requests through a utility function.
*   **Client-Side Form Validation:** Checks if forms are filled correctly.

## Setup Instructions

Follow these detailed steps to set up and run the application on your computer:

### Step 1: Clone the Repository

1.  Open your terminal or command prompt.
2.  Navigate to the directory where you want to store the project.
3.  Clone the repository using the following command:

    ```bash
    git clone [repository_url]
    ```

    Replace `[repository_url]` with the actual URL of your repository.
4.  Navigate into the newly created project directory:

    ```bash
    cd frontend
    ```

### Step 2: Install Dependencies

1.  Make sure you have Node.js and npm (or yarn) installed. If not, download and install from [https://nodejs.org/](https://nodejs.org/).
2.  In the terminal, inside the project directory run the following command:

    ```bash
    npm install
    ```

    This will install all the required packages for the app.

### Step 3: Create and Configure `.env` File

1.  In the root directory of the project (the `frontend` directory where `package.json` is located), create a new file named `.env`.
2.  Open the `.env` file in a text editor and add the following line, replacing `http://localhost:5000` with the actual URL of your backend server's API:

    ```
    REACT_APP_API_ENDPOINT=http://localhost:5000
    ```
   *  **Note:** This endpoint should point to your backend server's API base URL. If you haven't set up the backend yet, use the address provided to your project.

### Step 4: Start the Application

1.  In the terminal, inside the project directory, run the following command:

    ```bash
    npm start
    ```

2.  The application will start and automatically open in your default web browser at `http://localhost:3000`. If it does not, manually navigate to that URL in your browser.

## Step-by-Step Usage Guide

1.  **Open the App:**
    *   Once the app is running, go to `http://localhost:3000` in your web browser.

2.  **Landing Page:**
    *   You'll see the CollabTool landing page with a welcome message.
    *   You will see two buttons: "Register" and "Login".

3.  **Registering a New Account:**
    *   Click on the **"Register"** button.
    *   You'll be redirected to the registration page.
    *   Fill out the form with your desired:
        *   **Username**
        *   **Email Address**
        *   **Password**
    *   Click the **"Register"** button at the bottom of the form.
    *   If successful you'll see a success message using a toast and will be redirected to the login page.
    *   If there is an error, an error message will be displayed using a toast.

4.  **Logging Into Your Account:**
    *   Click on the **"Login"** button from the landing page or when redirected from registration.
    *   You'll be redirected to the login page.
    *   Fill out the form with your:
        *   **Email Address**
        *   **Password**
    *   Click the **"Login"** button.
    *   If successful, you'll be redirected to the dashboard with a welcome message and your username will be displayed in the top right.
    *   If there is an error, an error message will be displayed using a toast.

5.  **Accessing the Dashboard:**
    *   After successfully logging in, you will automatically be redirected to your dashboard.
    *  You can see your username and a logout button in the top right of the screen

6.  **Logging Out:**
   *  Click the logout button in the top right, this will redirect you to the landing page and your login status will be removed.

## Project Structure

The project follows the below folder structure