# User Login Application

This project is a user login application that utilizes Google user authentication. It consists of a backend built with Java and Spring Boot, and a frontend developed with HTML, CSS, and JavaScript.

## Project Structure

```
user-login-app
├── backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── userlogin
│   │   │   │           ├── App.java
│   │   │   │           ├── controllers
│   │   │   │           │   └── AuthController.java
│   │   │   │           ├── services
│   │   │   │           │   └── GoogleAuthService.java
│   │   │   │           └── models
│   │   │   │               └── User.java
│   │   │   └── resources
│   │   │       └── application.properties
│   └── pom.xml
├── frontend
│   ├── index.html
│   ├── css
│   │   └── styles.css
│   └── js
│       └── app.js
└── README.md
```

## Setup Instructions

### Prerequisites

- Java 11 or higher
- Maven
- Node.js (for frontend dependencies)

### Backend Setup

1. Navigate to the `backend` directory.
2. Run `mvn clean install` to build the project and download dependencies.
3. Configure your Google OAuth credentials in `src/main/resources/application.properties`.
4. Start the Spring Boot application by running `mvn spring-boot:run`.

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Open `index.html` in your web browser to access the login interface.

## Usage

- Click the "Login with Google" button to initiate the authentication process.
- Upon successful login, user information will be displayed.

## License

This project is licensed under the MIT License.